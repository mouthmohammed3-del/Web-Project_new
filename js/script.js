const roleButtons = document.querySelectorAll('.role-btn');
const formTitle = document.getElementById('form-title');
const usernameInput = document.getElementById('username');
const loginForm = document.getElementById('loginForm');

let selectedRole = 'Manager'; // default

// Role selection


roleButtons.forEach(button => {
    // forEach يعني: "مر على كل زر من الأزرار واحد واحد
    // addEventListener يعني: "لما يحصل حدث معين على هذا العنصر، نفذ الكود".
    // الحدث هنا هو "click" (الضغط بالماوس أو باللمس).

    // ()=>{} هو دالة تقول: "هذا ما سنفعله لما ينضغط الزر".
    button.addEventListener('click', () => {

        roleButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        // يضيف كلاس active للزر الذي ضغطت عليه الآن.

        // هذا الكلاس في CSS ممكن يخلي الزر يبان بلون مختلف.

        const role = button.getAttribute('data-role');
        const color = button.getAttribute('data-color');
        const hoverColor = button.getAttribute('data-hover');

        // 
        // getAttribute('data-role') → تجيب "Manager" أو "Teacher" أو "Student".

        // getAttribute('data-color') → تجيب اللون الأساسي للدور.

        // getAttribute('data-hover') → تجيب لون التمرير (Hover).
        // in html
        // <button class="role-btn" data-role="Manager" data-color="#1e3c72" data-hover="#2a5298">
        // Manager
        // </button>

        selectedRole = role;

        document.documentElement.style.setProperty('--role-color', color);
        document.documentElement.style.setProperty('--role-hover-color', hoverColor);
        // -------------------------------------------------------------
        formTitle.textContent = `${role} Login`;

        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        setLanguage(currentLang);
        // يغير النص داخل عنوان النموذج (formTitle).

        // إذا اخترت Teacher يصير العنوان: "Teacher Login".

        // إذا اخترت Manager يصير "Manager Login".


        //    المستخدم يضغط على زر (مثل Teacher).



        // البرنامج يمسح أي "تحديد" من بقية الأزرار.

        // يحدد الزر الجديد بإضافة كلاس active.

        // يقرأ البيانات المخبأة داخل الزر (data-role, data-color, data-hover).

        // يخزن الدور الجديد داخل selectedRole.

        // يعدل ألوان الصفحة في CSS مباشرة.

        // يغير عنوان النموذج ليعكس الدور الجديد.

        // ينتهي الإجراء ويصبح الزر المحدد نشط
        // ----------------------------------------------------



        // if (role === 'Manager') {
        //     // usernameInput.placeholder = 'Enter your manager ID';
        // } else if (role === 'Teacher') {
        //     usernameInput.placeholder = 'Enter your teacher ID';
        // } else if (role === 'student'){
        //     usernameInput.placeholder = 'Enter your student ID';
        // }
    });
});
// /////////////////////////////////////////////////////////////////////////////////
// النصوص باللغتين
const translations = {
    en: {
        formTitle: "Manager Login",
        managerBtn: "Manager",
        teacherBtn: "Teacher",
        studentBtn: "Student",
        usernameLabel: "Username / Email",
        passwordLabel: "Password",
        forgotPassword: "Forgot password?",
        loginBtn: "Log In",
        footer: "© 2025 MySchool | All Rights Reserved"
    },
    ar: {
        formTitle: "تسجيل دخول المدير",
        managerBtn: "مدير",
        teacherBtn: "معلم",
        studentBtn: "طالب",
        usernameLabel: "اسم المستخدم / البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        forgotPassword: "هل نسيت كلمة المرور؟",
        loginBtn: "تسجيل الدخول",
        footer: "© 2025 مدرستي | جميع الحقوق محفوظة"
    }
};

// تغيير اللغة
let selectedRol = 'Manager'; // الدور الافتراضي

function setLanguage(lang) {
    // تعديل النصوص حسب الدور المختار
    if (selectedRole === 'Manager') {
        document.getElementById('form-title').textContent =
            lang === 'ar' ? "تسجيل دخول المدير" : "Manager Login";
    } else if (selectedRole === 'Teacher') {
        document.getElementById('form-title').textContent =
            lang === 'ar' ? "تسجيل دخول المعلم" : "Teacher Login";
    } else if (selectedRole === 'Student') {
        document.getElementById('form-title').textContent =
            lang === 'ar' ? "تسجيل دخول الطالب" : "Student Login";
    }

    // باقي النصوص
    document.querySelectorAll('.role-btn')[0].textContent = translations[lang].managerBtn;
    document.querySelectorAll('.role-btn')[1].textContent = translations[lang].teacherBtn;
    document.querySelectorAll('.role-btn')[2].textContent = translations[lang].studentBtn;

    document.querySelector('label[for="username"]').textContent = translations[lang].usernameLabel;
    document.querySelector('label[for="password"]').textContent = translations[lang].passwordLabel;
    document.querySelector('.forgot-password').textContent = translations[lang].forgotPassword;
    document.querySelector('.login-btn').textContent = translations[lang].loginBtn;
    document.querySelector('.footer-text').textContent = translations[lang].footer;
}


// //////////////////////////////////////////////////////////////////////////
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "🙈"; // change icon
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "👁";
    }
}

// Redirect on login
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (selectedRole === 'Manager') {
        window.location.href = 'adminn.html'; // your admin page
    } else if (selectedRole === 'Teacher') {
        window.location.href = 'teacher.html'; // your teacher page
    } else {
        window.location.href = 'student.html'; // your student page
    }
});
