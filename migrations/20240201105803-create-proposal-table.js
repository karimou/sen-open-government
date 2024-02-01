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
  db.createTable('opinion_proposal', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    opinion_id: {
      type: 'int',
      foreignkey: {
        name: 'opinion_proposal_opinion_fk',
        table: 'opinion',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
      }
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
        name: 'opinion_proposal_user_fk',
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
  db.dropTable('opinion_proposal', callback)
};

exports._meta = {
  "version": 1
};
