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
  db.createdTable('election_candidate', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    election_id: {
      type: 'int',
      foreignKey: {
        name: 'election_candidate_election_fk',
        table: 'election',
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
        name: 'election_candidate_person_fk',
        table: 'person',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
      }
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
        name: 'election_candidate_user_fk',
        table: 'user',
        mapping: 'id',
        rules: {
          onDelete: 'SET NULL',
          onUpdate: 'RESTRICT'
        }
      }
		}
  }, function(err) {
    if (err) {console.log(err);return callback(err)}
    callback();
  });
};

exports.down = function(db, callback) {
  db.dropTable('election_candidate');
};

exports._meta = {
  "version": 1
};
