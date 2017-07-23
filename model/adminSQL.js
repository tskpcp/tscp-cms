var cms_admin_mst_sql={
    insert:'INSERT INTO cms_admin_mst (LOGIN_ID,PASSWORD,USER_NAME,POSITION,PERMISSIONS,MARK,CMP_TYPE) VALUES(?,?,?,?,?,?,?)',
    queryAll:'SELECT * FROM cms_admin_mst',
    getById:'SELECT * FROM cms_admin_mst WHERE ID=?',
    updateById:'UPDATE cms_admin_mst SET LOGIN_ID=?,PASSWORD=?,USER_NAME=?,POSITION=?,PERMISSIONS=?,MARK=?,CMP_TYPE=? WHERE ID=?',
    deleteById:'DELETE FROM cms_admin_mst WHERE ID=?',
}
module.exports=cms_admin_mst_sql;

