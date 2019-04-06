module.exports = {
    syncCellsOnPort(port, cells){
        db.get('cells').remove({port: +port}).write();

        cells.map((i) => {
            db.get('cells').push(i).write()
        });

        return db.get('cells').filter({port: +port}).value()
    },
    getCellsOnPort(port){
        return db.get('cells').filter({port: +port}).value()
    }
};