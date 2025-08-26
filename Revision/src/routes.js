
import categoryRoutes from './modules/category/category.routes.js';
const allRoutes = (app)=>{
    app.use('/api/v1/categories' , categoryRoutes);
}
export default allRoutes;