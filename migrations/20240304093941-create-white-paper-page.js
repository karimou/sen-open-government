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
  db.createTable('document_page', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: 'string'
    },
    summary: {
      type: 'string'
    },
    content: {
      type: 'string'
    },
    cover_image_url: {
      type: 'string'
    },
    capsule_url: {
      type: 'string'
    },
    parent_id: {
      type: 'int',
      foreignKey: {
        name: 'document_page_parent_fk',
        table: 'document_page',
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
        name: 'document_page_user_fk',
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
    return callback();
  })
};

exports.down = function(db, callback) {
  db.dropTable('document_page', callback)
};

exports._meta = {
  "version": 1
};
