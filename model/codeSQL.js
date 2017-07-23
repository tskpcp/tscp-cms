var cms_code_mst={
    insert:'INSERT INTO cms_code_mst (CODE_ID,CODE_NAME,CODE_TYPE,CODE_VALUE1,CODE_VALUE2,CODE_VALUE3) VALUES(?,?,?,?,?,?)',
    queryAll:'SELECT * FROM cms_code_mst',
    getById:'SELECT * FROM cms_code_mst WHERE ID=?',
    getByCodeId:'SELECT * FROM cms_code_mst WHERE CODE_ID=?',
    updateById:'UPDATE cms_code_mst SET CODE_ID=?,CODE_NAME=?,CODE_TYPE=?,CODE_VALUE1=?,CODE_VALUE2=?,CODE_VALUE3=?WHERE ID=?',
    deleteById:'DELETE FROM cms_code_mst WHERE ID=?',
}
module.exports=cms_code_mst;