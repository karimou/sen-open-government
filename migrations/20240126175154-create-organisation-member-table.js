'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('organisation_member', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    organisation_id: {
      type: 'int',
      foreignKey: {
        name: 'organisation_member_organisation_fk',
        table: 'organisation',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
      }
    },
    person_id: {
      type: 'int',
      foreignKey: {
        name: 'organisation_member_person_fk',
        table: 'person',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
      }
    },
		role: {
			type: 'string'
		},
		created_on: {
			type: 'timestamp',
			notNull: true,
			defaultValue: new String('CURRENT_TIMESTAMP')
		},
		last_modified_on: {
			type: 'timestamp'
		},
		last_modified_by: {
			type: 'int',
      foreignkey: {
        name: 'organisation_member_user_fk',
        table: 'user',
        mapping: 'id',
        rules: {
          onDelete: 'SET NULL',
          onUpdate: 'RESTRICT'
        }
      }
		}
  }, function(err) {
    if (err) {console.log(err);return callback(err)};
    let query = `
      CREATE UNIQUE INDEX IF NOT EXISTS organisation_member_combined_index ON organisation_member(organisation_id, person_id);
      ALTER TABLE organisation_member ADD CONSTRAINT unique_label UNIQUE USING INDEX organisation_member_combined_index;
    `;
    db.runSql(query, function(err) {
      if (err) {console.log(err);return callback(err)}
      return callback();
    });
  })
};


exports.down = function(db, callback) {
  let query = `
    DROP INDEX IF NOT EXISTS organisation_member_combined_index;
    ALTER TABLE organisation_member DROP CONSTRAINT IF EXISTS unique_label;
  `;
  
  db.runSql(query, function(err) {
    if (err) {console.log(err);return callback(err)};
    db.dropTable('organisation_member', callback);
  });
};

exports._meta = {
  "version": 1
};
