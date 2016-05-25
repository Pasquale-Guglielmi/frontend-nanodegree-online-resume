var bio = {
    'name' : 'Pasquale Guglielmi',
    'role' : 'Front-End Web Developer',
    'contacts' : {
        'mobile' : '07481418252',
        'email' : 'guglielmipasquale@yahoo.it',
        'gmail' : 'guglielmipasquale@gmail.com',
        'GitHub' : 'https://github.com/Pasquale-Guglielmi',
        'location' : 'London'
    },
    'welcome' : '...in code we trust !',
    'skills' : ['HTML5', 'CSS3', 'Bootstrap', 'Git', 'JavaScript'],
    'biopic' : 'images/me.jpg',
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var forattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(forattedBiopic, formattedWelcome);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGmail = HTMLcontactGeneric.replace("%data%", bio.contacts.gmail).replace("%contact%", "gmail");
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.GitHub);
        var formattedMainLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedEmail, formattedGmail, formattedMobile, formattedGitHub, formattedMainLocation);
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
};

bio.display();

var work = {
    'jobs' : [
        {
            'employer': 'Self Employed',
            'title': 'Front-End Web Development Student',
            'dates': 'February 2016 - present',
            'location': 'Udacity',
            'description': 'Using HTML5, CSS3 and JavaScript to build beautiful and responsive websites optimized for mobile and desktop performance.'
        },
        {
            'employer': 'Denmark Street Studios',
            'title': 'Studio Assistant',
            'dates': 'July 2015 - February 2016',
            'location': 'London, Denmark Street',
            'description': 'Volunteering in assisting sound engineers and musicians during recording sessions; audio editing; troubleshooting.'
        },
        {
            'employer': 'Self Employed',
            'title': 'Freelance Sound Engineer',
            'dates': 'March 2012 - March 2015',
            'location': 'Monteroduni(IS), Italy',
            'description': 'Multitrack recording, audio editing and mixing; FOH mixing during live music events.'
        },
        {
            'employer': 'Self Employed',
            'title': 'Classical Guitar teacher',
            'dates': '2008 - March 2015',
            'location': 'Monteroduni(IS), Italy',
            'description': 'Music theory and classical guitar private tuition.'
        },
        {
            'employer': 'Self Employed',
            'title': 'Musician',
            'dates': '2003 - March 2015',
            'location': 'Molise, Italy',
            'description': ' Guitarist, banjoist.'
        }
    ],
    display: function(){
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
        }
    }
};

work.display();


var education = {
    'schools' : [
        {
            'name': 'Spray Records',
            'location': 'Moscufo(PE), Italy',
            'degree': 'Certificate',
            'majors': 'Acoustic, Psychoacoustics, Studio Recording, Live Education, P.A. Systems',
            'dates': '2011 - 2012',
            'url': 'http://www.sprayrecords.it/'
        },
        {
            'name': 'Federico II University',
            'location': 'Piazzale Tecchio, Naples(NA), Italy',
            'degree': 'Not Completed (3 exams to completion) BSc Mechanical Engineering',
            'majors': 'Mathematical Analysis, Analytical Mechanics, Materials Technology, Physics, Chemistry',
            'dates': '2004 - 2008',
            'url': 'http://www.unina.it/home;jsessionid=7FAD553981128133B124FF3F1AEDAE83.node_staging12'
        },
        {
            'name': 'Liceo Scientifico Ettore Majorana',
            'location': 'Isernia(IS), Italy',
            'degree': 'Diploma',
            'majors': 'Math, Physics, Chemistry, Biology, English',
            'dates': '1998 - 2003',
            'url': 'http://www.isismajoranafascitelli.gov.it/web/'
        }
    ],
    'onlineCourses' : [
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
    ],
    display: function() {
        for(var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajors);
        }
        $("#education").append(HTMLonlineClasses);
        for(var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].date);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $(".education-entry:last").append(formattedTitleSchool, formattedDate, formattedUrl);
        }
    }
};

education.display();

var projects = {
    'projects' : [
        {
            'title': ["Build a Portfolio Site", "https://github.com/Pasquale-Guglielmi/portfolio-page"],
            'dates': 'May 2016',
            'description': 'Replicate a design mockup provided in PDF, developing a fully responsive personal portfolio page using HTML, CSS, and the Bootstrap framework.',
            'images': [
                'https://s3.amazonaws.com/accredible_api_evidence_items/previews/138065/large/1462909999808?1462909979'
            ]
        }
    ],
    display: function(){
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[i].title[1]).replace("%data%", projects.projects[i].title[0]);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            var imageLinks = [];
            for (var x = 0; x < projects.projects[i].images.length; x++) {
                imageLinks.push(HTMLprojectImage.replace("%data%", projects.projects[i].images[x]));
                $(".project-entry:last").append(imageLinks[x]);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);

/* Here I make a JQuery to add and remove the 'open' class to the .btn-group div.
In this way I get the bootstrap dropdown menu, in which I placed the <ul> containing
all my contacts, being effective only for the viewport width <= 749px
I found information here: https://www.sitepoint.com/community/t/adding-removing-classes-on-resize-jquery/191805/2 */

$(window).load(function () {
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

$(window).resize(function () {
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






