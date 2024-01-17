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
  db.createTable('organisation', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    twitter: {
      type: 'string'
    },
    facebook: {
      type: 'string'
    },
    instagram: {
      type: 'string'
    },
    website: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    contact_phone: {
      type: 'string'
    },
    contact_email: {
      type: 'string'
    },
		parent_organisation_id: {
			type: 'int',
      foreignkey: {
        name: 'parent_organisation_id_fk',
        table: 'organisation',
        mapping: 'id',
        rules: {
          onDelete: 'SET NULL',
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
        name: 'election_user_fk',
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
  db.dropTable('organisation', callback)
};

exports._meta = {
  "version": 1
};
