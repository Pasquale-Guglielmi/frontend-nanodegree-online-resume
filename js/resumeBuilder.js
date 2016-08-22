'use strict';

$("#mapDiv").append(googleMap);

/* JQuery to toggle .open on <div class="btn-group">. to make the bootstrap dropdown menu working only for the viewport width <= 749px
 * Resources: https://www.sitepoint.com/community/t/adding-removing-classes-on-resize-jquery/191805/2
 */

$(window).load(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 749) {
        $(".my-btn").addClass("open");
        $("#topContacts").removeClass("dropdown-menu");
    }
    if (viewportWidth <= 749) {
        $(".my-btn").removeClass("open");
        $("#topContacts").addClass("dropdown-menu");
    }
});

$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 749) {
        $(".my-btn").addClass("open");
        $("#topContacts").removeClass("dropdown-menu");
    }
    if (viewportWidth <= 749) {
        $(".my-btn").removeClass("open");
        $("#topContacts").addClass("dropdown-menu");
    }
});

var model = {
    bio: {
        'name': 'Pasquale Guglielmi',
        'role': 'Front-End Web Developer',
        'contacts': {
            'mobile': '07481418252',
            'email': 'guglielmipasquale@yahoo.it',
            'gmail': 'guglielmipasquale@gmail.com',
            'github': 'https://github.com/Pasquale-Guglielmi',
            'location': 'London'
        },
        'welcomeMessage': '...in code we trust !',
        'skills': ['HTML5', 'CSS3', 'Bootstrap', 'Git', 'JavaScript'],
        'biopic': 'images/me2.jpg'
    },

    work: {
        jobs: [
            {
                'employer': 'Self Employed',
                'title': 'Front-End Web Development Student',
                'location': 'London',
                'dates': 'February 2016 - present',
                'description': 'Using HTML5, CSS3 and JavaScript to build beautiful and responsive ' +
                    'websites optimized for mobile and desktop performance.'
            },
            {
                'employer': 'Denmark Street Studios',
                'title': 'Studio Assistant',
                'location': 'London, Denmark Street',
                'dates': 'July 2015 - February 2016',
                'description': 'Volunteering in assisting sound engineers and musicians ' +
                    'during recording sessions; audio editing; troubleshooting.'
            },
            {
                'employer': 'Self Employed',
                'title': 'Freelance Sound Engineer',
                'location': 'Monteroduni(IS), Italy',
                'dates': 'March 2012 - March 2015',
                'description': 'Multitrack recording, audio editing and mixing; ' +
                    'FOH mixing during live music events.'
            },
            {
                'employer': 'Self Employed',
                'title': 'Musician',
                'location': 'Molise, Italy',
                'dates': '2003 - March 2015',
                'description': ' Guitarist, banjoist.'
            }
        ]
    },

    education: {
        schools: [
            {
                'name': 'Spray Records',
                'location': 'Moscufo(PE), Italy',
                'degree': 'Certificate',
                'majors': ['Acoustic', 'Psychoacoustics', 'Studio Recording', 'Live Education', 'P.A. Systems'],
                'dates': '2011 - 2012',
                'url': 'http://www.sprayrecords.it/'
            },
            {
                'name': 'Federico II University',
                'location': 'Naples(NA), Italy',
                'degree': 'Not Completed (3 exams to completion) BSc Mechanical Engineering',
                'majors': ['Mathematical Analysis', 'Analytical Mechanics', 'Materials Technology', 'Physics', 'Chemistry'],
                'dates': '2004 - 2008',
                'url': 'http://www.unina.it/home;jsessionid=7FAD553981128133B124FF3F1AEDAE83.node_staging12'
            },
            {
                'name': 'Liceo Scientifico Ettore Majorana',
                'location': 'Isernia(IS), Italy',
                'degree': 'Diploma',
                'majors': ['Math', 'Physics', 'Chemistry', 'Biology', 'English'],
                'dates': '1998 - 2003',
                'url': 'http://www.isismajoranafascitelli.gov.it/web/'
            }
        ],
        onlineCourses: [
            {
                'title': 'Front-End Web Developer Nanodegree',
                'school': 'Udacity',
                'date': '2016',
                'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
            },
            {
                'title': 'Linux Command Line Basics',
                'school': 'Udacity',
                'date': '2016',
                'url': 'https://www.udacity.com/course/linux-command-line-basics--ud595'
            },
            {
                'title': 'Responsive Web Design Fundamentals',
                'school': 'Udacity',
                'date': '2016',
                'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
            },
            {
                'title': 'Responsive Images',
                'school': 'Udacity',
                'date': '2016',
                'url': 'https://www.udacity.com/course/responsive-images--ud882'
            },
            {
                'title': 'How to Use Git and GitHub',
                'school': 'Udacity',
                'date': '2016',
                'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
            }
        ]
    },
    projects: {
        'projects': [
            {
                'title': 'Build a Portfolio Site',
                'dates': 'May 2016',
                'description': 'Replicate a design mockup provided in PDF, developing a fully responsive ' +
                    'personal portfolio page using HTML, CSS, and the Bootstrap framework.',
                'images': ['images/project1_big_x1.jpg'],
                'url': 'https://github.com/Pasquale-Guglielmi/portfolio-page'
            }
        ]
    }
};

var controller = {
    getBio: function() {
        return model.bio;
    },

    getWork: function() {
        return model.work;
    },

    getEducation: function() {
        return model.education;
    },

    getProjects: function() {
        return model.projects;
    },

    init: function() {
        View.bioView.init();
        View.workView.init();
        View.educationView.init();
        View.projectsView.init();

    }
};

var View = {
    hideFields: function(fields, target) {
        target.css("cursor", "pointer");
        fields.hide();
        target.on("click", function() {
            fields.slideToggle(500);
            $(this).find(".plus").toggle();
            $(this).find(".minus").toggle();
        });
    },

    bioView: {
        init: function() {
            this.bio = controller.getBio();
            this.formattedName = HTMLheaderName.replace("%data%", this.bio.name);
            this.formattedRole = HTMLheaderRole.replace("%data%", this.bio.role);
            this.forattedBiopic = HTMLbioPic.replace("%data%", this.bio.biopic);
            this.formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.bio.welcomeMessage);
            this.formattedEmail = HTMLemail.replace("%data%", this.bio.contacts.email);
            this.formattedGmail = HTMLcontactGeneric.replace("%data%", this.bio.contacts.gmail).replace("%contact%", "gmail");
            this.ormattedMobile = HTMLmobile.replace("%data%", this.bio.contacts.mobile);
            this.formattedGitHub = HTMLgithub.replace("%data%", this.bio.contacts.github);
            this.formattedMainLocation = HTMLlocation.replace("%data%", this.bio.contacts.location);
            this.render();
        },
        render: function() {
            $("#header").prepend(this.formattedName, this.formattedRole);
            $("#header").append(this.forattedBiopic, this.formattedWelcome);
            $("#topContacts").add("#footerContacts").append(this.formattedEmail, this.formattedGmail, this.formattedMobile, this.formattedGitHub, this.formattedMainLocation);
            if (this.bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (var i = 0; i < this.bio.skills.length; i++) {
                    $("#skills").append(HTMLskills.replace("%data%", this.bio.skills[i]));
                }
            }
        }
    },

    workView: {
        init: function() {
            this.work = controller.getWork();
            this.render();
        },

        render: function() {
            for (var i = 0; i < this.work.jobs.length; i++) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", this.work.jobs[i].employer),
                    formattedTitle = HTMLworkTitle.replace("%data%", this.work.jobs[i].title),
                    formattedEmployerTitle = formattedEmployer + formattedTitle,
                    formattedDates = HTMLworkDates.replace("%data%", this.work.jobs[i].dates),
                    formattedLocation = HTMLworkLocation.replace("%data%", this.work.jobs[i].location),
                    formattedDescription = HTMLworkDescription.replace("%data%", this.work.jobs[i].description);
                $("#workExperience").append(HTMLworkStart);
                $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
            }
                var Works = $('.work-entry'),
                    target = $("#workExperience h2");
                View.hideFields(Works, target);
        }
    },

    educationView: {
        init: function() {
            this.education = controller.getEducation();
            this.render();
        },

        render: function() {
            for (var i = 0; i < this.education.schools.length; i++) {
                var formattedName = HTMLschoolName.replace("#", this.education.schools[i].url).replace("%data%", this.education.schools[i].name),
                    formattedDegree = HTMLschoolDegree.replace("%data%", this.education.schools[i].degree),
                    formattedNameDegree = formattedName + formattedDegree,
                    formattedDates = HTMLschoolDates.replace("%data%", this.education.schools[i].dates),
                    formattedMajors = HTMLschoolMajor.replace("%data%", this.education.schools[i].majors.join(", ")),
                    formattedLocation = HTMLschoolLocation.replace("%data%", this.education.schools[i].location);
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajors);
            }
            $("#education").append(HTMLonlineClasses);
            for (var j = 0; j < this.education.onlineCourses.length; j++) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", this.education.onlineCourses[j].title),
                    formattedSchool = HTMLonlineSchool.replace("%data%", this.education.onlineCourses[j].school),
                    formattedTitleSchool = formattedTitle + formattedSchool,
                    formattedDate = HTMLonlineDates.replace("%data%", this.education.onlineCourses[j].date),
                    formattedUrl = HTMLonlineURL.replace("%data%", this.education.onlineCourses[j].url).replace("#", this.education.onlineCourses[j].url);
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedTitleSchool, formattedDate, formattedUrl);
            }
            var Projects = $(".education-entry").add('#education h3'),
                target = $("#education h2");
                View.hideFields(Projects, target);

        }
    },

    projectsView: {
        init: function() {
            this.projects = controller.getProjects();
            this.render();
        },

        render: function() {
            for (var i = 0; i < this.projects.projects.length; i++) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects.projects[i].title).replace("#", this.projects.projects[i].url),
                    formattedDates = HTMLprojectDates.replace("%data%", this.projects.projects[i].dates),
                    formattedDescription = HTMLprojectDescription.replace("%data%", this.projects.projects[i].description),
                    imageLinks = [];
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
                for (var x = 0; x < this.projects.projects[i].images.length; x++) {
                    imageLinks.push(HTMLprojectImage.replace("%data%", this.projects.projects[i].images[x]));
                    $(".project-entry:last").append(imageLinks[x]);
                }
            }
            var Projects = $(".project-entry"),
                target = $("#projects h2");
            View.hideFields(Projects, target);
        }
    },
};

controller.init();