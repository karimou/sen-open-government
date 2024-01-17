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
  db.createTable('opinion', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
		author_id: {
			type: 'int',
      foreignkey: {
        name: 'opinion_person_fk',
        table: 'person',
        mapping: 'id',
        rules: {
          onDelete: 'SET NULL',
          onUpdate: 'RESTRICT'
        }
      }
		},
    summary: {
      type: 'string'
    },
    content: {
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
        name: 'person_user_fk',
        table: 'user',
        mapping: 'id',
        rules: {
          onDelete: 'SET NULL',
          onUpdate: 'RESTRICT'
        }
      }
		}
  }, function(err) {
      
      if (err) {console.log(err);return callback(err);}
      return callback();

    }
  )
};

exports.down = function(db, callback) {
  db.dropTable('opinion', callback)
};

exports._meta = {
  "version": 1
};
