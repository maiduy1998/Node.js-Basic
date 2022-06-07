
# nodemon,Express,EJS SETUP 


# Cấu trúc file cơ bản của 1 PROJECT
 https://anonystick.com/blog-developer/project-express-va-nodejs-co-kien-truc-tot-la-nhu-the-nao-2021040967257708

 ### Hãy xem một project tốt cần có những folders nào: 



* /Controllers - Thư mục này sẽ chứa tất cả các chức năng dể viết các API của bạn. Cách đặt tên: xxxxx.controller.js trong đó xxx là nhiệm vụ thôi, ví dụ: login.controller.js 

* /Routes - Thư mục này sẽ chứa tất cả các tuyến đường mà bạn đã tạo bằng cách sử dụng Express Router và kết hợp với Controllers. Cách đặt tên cũng như trên xxxxx.routes.js 

* /Models - Thư mục này sẽ chứa tất cả các files như schema của bạn và và các chức năng cần thiết cho schema cũng sẽ nằm ở đây. Đặt tên xxxxx.model.js /Middleware - Thư mục này sẽ chứa tất cả phần mềm trung gian mà bạn đã tạo, ví dụ như là xác thực chẳng hạn... Cách đặt tên: xxxxx.middleware.js /Utils - Các chức năng phổ biến mà bạn sẽ yêu cầu nhiều lần trong suốt mã của mình ví dụ như check missing params trước khi xử lý dữ liệu chẳng hạn. Rất cần thiết. /Configs - File này dùng cấu hình cho các API / dịch vụ của bên thứ ba như passport / S3, v.v. Những thông số như keyAPI các kiểu. 



* Đó là những folders rất quan trọng, có thể nói là không thể thiếu. Ngoài ra còn những files trong root như là: 

* app.js - Tệp này về cơ bản sẽ là khai báo của ứng dụng Express 

* package.json - File này chứa tất cả các chi tiết npm của dự án, các lệnh chạy như scripts và các phần dependencies 

* .gitignore - Những file mà bạn không muốn đẩy sang git