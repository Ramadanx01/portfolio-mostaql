AOS.init();

const BASE_PATH = "project-details/";
const IMAGE_PATH = "./images/";

// أضفت تفاصيل التقنيات المستخدمة في كل مشروع
const projects = [
  {
    id: 1,
    title: "موقع كورساتي",
    description: "منصة تعليمية تفاعلية مستوحاة من Udemy مزودة بلوحة تحكم. تتيح المنصة للمستخدمين استعراض الدورات المتاحة، التسجيل فيها، ومتابعة تقدمهم التعليمي. تم تصميم واجهة المستخدم بشكل عصري وسهل الاستخدام لتعزيز تجربة التعلم. <strong>للوصول إلى لوحة التحكم الإدارية، استخدم: البريد الإلكتروني: `admin@example.com`، كلمة المرور: `Admin123`.</strong>",
    image: `${IMAGE_PATH}korsty.jpg`,
    live: `https://ramadanx01.github.io/Korsaty/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive Design", "API وهمي"]
  },
  {
    id: 2,
    title: "موقع قهوة (كوفي بوب)",
    description: "موقع كوفي شوب بسيط وأنيق بتصميم جذاب ومتجاوب يعرض منتجات المقهى وخدماته. يتميز الموقع بسهولة التصفح، التصميم الجذاب، وعرض المنتجات بطريقة احترافية تبرز مميزاتها للزوار. يتضمن الموقع صفحات للقائمة، المعرض، والتواصل.",
    image: `${IMAGE_PATH}cofee.jpg`,
    live: `https://ramadanx01.github.io/cofipop/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Animation"]
  },
  {
    id: 3,
    title: "مدونة شخصية",
    description: "مدونة ديناميكية لعرض المقالات والمحتوى باستخدام HTML، CSS، وJavaScript. تتميز المدونة بواجهة مستخدم عصرية، تصنيفات متعددة للمقالات، ونظام بحث متقدم. يمكن للزوار تصفح المقالات حسب التصنيف، البحث عن محتوى محدد، وقراءة المقالات الكاملة بتنسيق سهل القراءة.",
    image: `${IMAGE_PATH}blog.jpg`,
    live: `https://ramadanx01.github.io/blog/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: 4,
    title: "تطبيق تودو ليست",
    description: "تطبيق بسيط وفعال لإدارة المهام اليومية باستخدام HTML، CSS، وJavaScript. يسمح للمستخدمين بإضافة المهام، تحديد أولوياتها، وضع مواعيد نهائية لها، تعديلها، وحذفها. يتميز التطبيق بتصميم بسيط وسهل الاستخدام مع إمكانية حفظ المهام محلياً للرجوع إليها لاحقاً.",
    image: `${IMAGE_PATH}todo.jpg`,
    live: `https://ramadanx01.github.io/To-Do-List/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"]
  },
  {
    id: 5,
    title: "نظام إدارة مخزون الأبلكاش والخشب",
    description: "تطبيق ويب لتتبع وإدارة مخزون الأبلكاش والخشب بفعالية. يوفر هذا النظام واجهة سهلة الاستخدام لإدارة المخزون، متابعة المشتريات والمبيعات، وإنشاء تقارير تفصيلية عن حركة المنتجات. يساعد النظام أصحاب الأعمال على اتخاذ قرارات مدروسة بناءً على بيانات دقيقة عن المخزون.",
    image: `${IMAGE_PATH}system.jpg`,
    live: `https://ramadanx01.github.io/system/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Charts.js"]
  },
  {
    id: 6,
    title: "موقع لتعلم الفرونت اند (نموذج توضيحي)",
    description: "نموذج واجهة ويب لعرض مهارات تطوير الواجهات الأمامية. يحتوي الموقع على أقسام متنوعة تعرض مختلف المهارات والتقنيات المستخدمة في تطوير الواجهات، مع أمثلة توضيحية وشروحات مبسطة لكل تقنية. يهدف الموقع لمساعدة المبتدئين في فهم أساسيات تطوير الويب الأمامي.",
    image: `${IMAGE_PATH}learn-frontEnd.jpg`,
    live: `https://ramadanx01.github.io/learn-front-end/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: 7,
    title: "نظام تسجيل دخول وهمي",
    description: "نموذج تسجيل دخول تفاعلي لمحاكاة تجربة المستخدم في إدارة الحسابات. يتضمن هذا النظام واجهة مستخدم جذابة مع نماذج للتسجيل، تسجيل الدخول، استعادة كلمة المرور، والتحقق من البريد الإلكتروني. تم تطبيق التحقق من صحة المدخلات ورسائل الخطأ المناسبة لتحسين تجربة المستخدم. <strong>يمكنك تجربة النظام باستخدام بيانات تسجيل الدخول التالية (مستمدة من JSONPlaceholder API):<ul><li>اسم المستخدم: Bret, كلمة المرور: 1</li><li>اسم المستخدم: Antonette, كلمة المرور: 2</li><li>اسم المستخدم: Samantha, كلمة المرور: 3</li></ul></strong>",
    image: `${IMAGE_PATH}login-system1.jpg`,
    live: `https://ramadanx01.github.io/login-system/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript", "Form Validation", "JSONPlaceholder API"]
  },
  {
    id: 8,
    title: "الآلة الحاسبة",
    description: "تطبيق ويب بسيط وفعال لتنفيذ العمليات الحسابية الأساسية (الجمع، الطرح، الضرب، القسمة). يتميز بواجهة مستخدم نظيفة وبديهية، مما يجعله سهل الاستخدام لإجراء حسابات سريعة ودقيقة.",
    image: `${IMAGE_PATH}calcoulater.jpg`,
    live: `https://ramadanx01.github.io/calcolator-wood/`,
    github: null,
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 9,
    title: "جوسي لاند (نموذج موقع عصائر)",
    description: "نموذج لموقع ويب مصمم خصيصًا لمحل عصائر، يعرض المنتجات بطريقة جذابة وعصرية. يهدف إلى توفير تجربة مستخدم سلسة وممتعة، مع التركيز على التصميم الجمالي والمتجاوب الذي يبرز نضارة وجودة العصائر.",
    image: `${IMAGE_PATH}juicyland.jpg`,
    live: `https://ramadanx01.github.io/prject1-for-bootstrap/`,
    github: `https://github.com/Ramadanx01/prject1-for-bootstrap`,
    technologies: ["HTML5", "CSS3", "Bootstrap 5"]
  }
];

const projectList = document.getElementById('project-list');
if (projectList) {
  projects.forEach(project => {
    let githubButton = '';
    
    if (project.github) {
      githubButton = `<a href="${project.github}" class="btn btn-outline-secondary" target="_blank" aria-label="عرض كود مشروع ${project.title}">عرض الكود</a>`;
    } else {
      githubButton = `<a class="btn btn-outline-secondary disabled" title="الكود غير متاح حالياً" style="pointer-events: none;">الكود</a>`;
    }

    const projectCard = `
      <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
          <div class="card-body">
            <h2 class="card-title h5">${project.title}</h2>
            <p class="card-text">${project.description.substring(0, 100)}...</p>
            <div class="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-3">
              <a href="${project.live}" class="btn btn-primary" target="_blank" aria-label="عرض مباشر لمشروع ${project.title}">عرض مباشر</a>
              ${githubButton}
              <button class="btn btn-outline-primary show-project-details" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="${project.id - 1}" aria-label="تفاصيل مشروع ${project.title}">تفاصيل المشروع</button>
            </div>
          </div>
        </div>
      </div>
    `;
    projectList.innerHTML += projectCard;
  });
  
  // إضافة مستمعي الأحداث لأزرار تفاصيل المشروع
  document.querySelectorAll('.show-project-details').forEach(button => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const project = projects[projectId];
      
      document.getElementById('projectModalTitle').textContent = project.title;
      document.getElementById('projectModalImage').src = project.image;
      document.getElementById('projectModalImage').alt = project.title;
      document.getElementById('projectModalDescription').innerHTML = `<p>${project.description}</p>`;
      
      const techBadges = project.technologies.map(tech => 
        `<span class="badge bg-light text-dark me-2 mb-2">${tech}</span>`
      ).join('');
      
      document.getElementById('projectModalTech').innerHTML = techBadges;
      document.getElementById('projectModalLive').href = project.live;
      
      const githubLink = document.getElementById('projectModalGithub');
      if (project.github) {
        githubLink.href = project.github;
        githubLink.classList.remove('disabled');
        githubLink.style.pointerEvents = 'auto';
      } else {
        githubLink.href = '#';
        githubLink.classList.add('disabled');
        githubLink.style.pointerEvents = 'none';
        githubLink.title = 'الكود غير متاح حالياً';
      }
    });
  });
} else {
  console.error("عنصر project-list غير موجود في الصفحة.");
}

// زر العودة للأعلى
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
