
import categoryRoutes from './modules/category/category.routes.js';
const allRoutes = (app)=>{
    app.use(process.env.API_PREFIX+'/categories' , categoryRoutes);
}
export default allRoutes;