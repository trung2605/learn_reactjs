//Nhiệm vụ là export các file Context và Provider đã được tạo trong thư mục store để sử dụng trong ứng dụng React.


export { default as StoreContext } from './Context';
export { default as StoreProvider } from './Provider';
export * from './hooks'; 
export * as actions from './actions';
// kiểu * là export tất cả thằng bên trong 
// và quy thành 1 object duy nhất tên là actions
