const hana = require('@sap/hana-client');
class HanaConnection {
    static create(params) {
        return new Promise((resolve, reject) => {
            const conn = hana.createConnection();
            conn.connect(params, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(conn);
                }
            });
        });
    }
}
