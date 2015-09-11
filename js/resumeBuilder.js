var bio = {
	"name" : "Steven Lewandowski",
	"role" : "Director of Awesome",
	"contacts" : {
		"mobile" : "813-784-0090",
		"email" : "lewandowski.steven@gmail.com",
		"twitter" : "lewanbrau",
		"github" : "lewanbrau",
		"blog" : "http://lewanbrau.com",
		"location" : "San Francisco"
	},
	"welcomeMsg" : "Hello and welcome to my online resume! This is a place for me to show off my rad new .js skills that I'm now going to use all over the place. Check out my below skills and past work. I'm sure you'll like something.",
	"skills" : ["python", ".js", "css", "HTML", "node.js"],
	"pictureURL" : "images/fry.jpg"	
};

bio.display = function(){
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName + formattedHeaderRole);
	var formattedContacts = [];
	formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContacts.push(HTMLblog.replace("%data%", bio.contacts.blog));
	formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));
	for (var contact in formattedContacts){
		$("#topContacts, #footerContacts").append(formattedContacts[contact]);
	}
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(formattedWelcomeMsg);
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

};

var work = {
	"jobs": [
		{
			"employer": "Eventbrite",
			"title": "Event Experience Engineer",
			"location": "San Francisco, CA",
			"dates": "August 2015 - Present",
			"description": "Building awesome stuff to make event experience the bomb!"
		},
		{
			"employer": "Eventbrite",
			"title": "Sr. Technical Field Operations Manager",
			"location": "San Francisco, CA",
			"dates": "August 2011 - August 2015",
			"description": "Deploying event technology to the coolest events around the world."
		}
	]
};

work.display = function(){
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedEmployerTitle);

	}
};

var projects = {
	"projects": [
		{
			"title": "The Muddership",
			"dates": "August 2013 - January 2015",
			"description": "A mobile network operations center built to withstand the worst case scenario for internet armageddon.",
			"image": "http://trifunk.com/wp-content/uploads/2013/02/tough-mudder-logo.jpg"
		},
		{
			"title": "Project Donatello",
			"dates": "January 2011 - Present",
			"description": "A secret Project!",
			"image": "http://img1.wikia.nocookie.net/__cb20130523111808/adventuretimewithfinnandjake/images/d/d3/Ninja_Turtle_Donatello_4.gif.png"
		}
	]
};

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
	}
};

// education JSON object
var education = {
	"schools": [
	{
		"name": "St. Petersburg College",
		"location": "St. Petersburg, FL",
		"degree": "BAS",
		"major": ["Technology Management"]
	},
	{
		"name": "Tallahasee Community College",
		"location": "Tallahassee, FL",
		"degree": "AS",
		"major": ["Associate Degree"]
	}
  ],
	"onlineCourses": [
	{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
	}
  ]
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolName + formattedSchooldegree + formattedSchoollocation + formattedSchoolmajor);
	}

};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
	var xy = "x = " + loc.clientX +", y = " + loc.clientY
	console.log(xy);
});


