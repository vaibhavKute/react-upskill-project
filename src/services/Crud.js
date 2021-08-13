import http from '../http';

class Crud{
    getData(){
        // return http.get('/users');
        console.log('Get Service Called');
        console.log(http)
    }
    postData(data){
        // return http.post('/users',data);
    }
    updateData(data, id){
        // return http.put(`/users/${id}`,data);
    }
    deleteData(id){
        // return http.delete(`/users/${id}`);
    }
}

export default new Crud