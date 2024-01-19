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
  db.addColumn('user', 'last_modified_on', { type: 'int' }, callback);
  db.addColumn('user', 'last_modified_by', { type: 'int' }, function() {
    db.addForeignKey('user', 'user', 'user_user_fk', {'last_modified_by': 'id'}, {
      onDelete: 'SET NULL',
      onUpdate: 'RESTRICT'
    }, callback);
  });
};

exports.down = function(db, callback) {
  db.removeColumn('user', 'last_modified_on');
  db.removeColumn('user', 'last_modified_by');
  callback();
};

exports._meta = {
  "version": 1
};
