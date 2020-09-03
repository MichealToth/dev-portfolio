/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
	isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
	title: "Micheal Toth 🇿🇦 ",
	logo_name: "  Micheal Laszlo Toth ",
	nickname: "Brussels, Belgium ",
	subTitle:
		"A passionate web and mobile software engineer who takes great pleasure in crafting impeccable and impactful software that empower people.",
	resumeLink:
		"https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
	portfolio_repository: "https://github.com/MichealToth",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/MichealToth",
	linkedin: "https://www.linkedin.com/in/micheal-toth-b65388175/",
	gmail: "kappamikey888@gmail.com",
	gitlab: "https://gitlab.com/ashutoshhathidara98",
	facebook: "https://www.facebook.com/laymanbrother.19/",
	twitter: "https://twitter.com/ashutosh_1919",
	instagram: "https://www.instagram.com/layman_brother/",
};

const skills = {
	data: [
		{
			title: "Mobile App Development",
			fileName: "MobileAppImg",
			skills: [
				"⚡ Develop native mobile applications for iOS & Android using either Flutter or React Native - depending on the client's spec",
				"⚡ Develop lightweight yet powerful Progressive Web Apps using React",
			],
			softwareSkills: [
				{
					skillName: "React Native",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB",
					},
				},

				{
					skillName: "Flutter",
					fontAwesomeClassname: "simple-icons:flutter",
					style: {
						color: "#02569B",
					},
				},
				{
					skillName: "Apple",
					fontAwesomeClassname: "simple-icons:apple",
					style: {
						color: "#F8F8F8",
					},
				},
				{
					skillName: "Android",
					fontAwesomeClassname: "simple-icons:android",
					style: {
						color: "#3EDA86",
					},
				},
			],
		},

		{
			title: "Front-End Development",
			fileName: "FullStackImg",
			skills: [
				"🌠 Create responsive user interfaces using React, Gatsby & Next.js",
				"🌠 Bring designs to life with CSS, SASS, Styled Components & animation libraries such as Framer Motion & GSAP",
			],
			softwareSkills: [
				{
					skillName: "HTML5",
					fontAwesomeClassname: "simple-icons:html5",
					style: {
						color: "#E34F26",
					},
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "simple-icons:css3",
					style: {
						color: "#1572B6",
					},
				},
				{
					skillName: "Sass",
					fontAwesomeClassname: "simple-icons:sass",
					style: {
						color: "#CC6699",
					},
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "simple-icons:javascript",
					style: {
						backgroundColor: "#000000",
						color: "#F7DF1E",
					},
				},
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB",
					},
				},
				{
					skillName: "Gatsby",
					fontAwesomeClassname: "simple-icons:gatsby",
					style: {
						color: "#663399",
					},
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "simple-icons:git",
					style: {
						color: "#F05033",
					},
				},
			],
		},

		{
			title: "Back-End Development",
			fileName: "CloudInfraImg",
			skills: [
				"🧠 Engineer server-side technology using Node.js & Express",
				"🧠 Configure and manage cloud, relational and non-relational databases",
			],
			softwareSkills: [
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "simple-icons:node-dot-js",
					style: {
						color: "#339933",
					},
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "simple-icons:npm",
					style: {
						color: "#CB3837",
					},
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "simple-icons:yarn",
					style: {
						color: "#2C8EBB",
					},
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "simple-icons:firebase",
					style: {
						color: "#FFCA28",
					},
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "simple-icons:postgresql",
					style: {
						color: "#336791",
					},
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "simple-icons:mongodb",
					style: {
						color: "#47A248",
					},
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "simple-icons:docker",
					style: {
						color: "#1488C6",
					},
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "simple-icons:kubernetes",
					style: {
						color: "#326CE5",
					},
				},
				{
					skillName: "Linux",
					fontAwesomeClassname: "simple-icons:ubuntu",
					style: {
						color: "#D84614",
					},
				},
			],
		},
		{
			title: "UI/UX Design",
			fileName: "DesignImg",
			skills: [
				"🎨 Design highly attractive user interfaces for web, mobile and desktop applications using Figma",
				"🎨 Ensure optimal user experiences by creating consistent design systems and applying solid design principles such as atomic design ",
			],
			softwareSkills: [
				{
					skillName: "Figma",
					fontAwesomeClassname: "simple-icons:figma",
					style: {
						color: "#F24F1F",
						stroke: "#000000",
					},
				},
			],
		},
	],
};

// Education Page
const competitiveSites = {
	competitiveSites: [
		{
			siteName: "HackerRank",
			iconifyClassname: "simple-icons:hackerrank",
			style: {
				color: "#2EC866",
			},
			profileLink: "https://www.hackerrank.com/layman_brother",
		},
		{
			siteName: "Codechef",
			iconifyClassname: "simple-icons:codechef",
			style: {
				color: "#5B4638",
			},
			profileLink: "https://www.codechef.com/users/ashutosh_1919",
		},
		{
			siteName: "Codeforces",
			iconifyClassname: "simple-icons:codeforces",
			style: {
				color: "#1F8ACB",
			},
			profileLink: "http://codeforces.com/profile/layman_brother",
		},
		{
			siteName: "Hackerearth",
			iconifyClassname: "simple-icons:hackerearth",
			style: {
				color: "#323754",
			},
			profileLink: "https://www.hackerearth.com/@ashutosh391",
		},
		{
			siteName: "Kaggle",
			iconifyClassname: "simple-icons:kaggle",
			style: {
				color: "#20BEFF",
			},
			profileLink: "https://www.kaggle.com/laymanbrother",
		},
	],
};

const degrees = {
	degrees: [
		{
			title: "Indian Institute of Information Technology Kurnool",
			subtitle: "B.Tech. in Computer Engineering",
			logo_path: "iiitk_logo.png",
			alt_name: "IIITDM Kurnool",
			duration: "2016 - Present",
			descriptions: [
				"⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
				"⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
				"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
			],
			website_link: "http://iiitk.ac.in",
		},
	],
};

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
			alt_name: "Stanford University",
			color_code: "#8C151599",
		},
		{
			title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
			alt_name: "deeplearning.ai",
			color_code: "#00000099",
		},
		{
			title: "ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			alt_name: "Google",
			color_code: "#0C9D5899",
		},
		{
			title: "Data Science",
			subtitle: "- Alex Aklson",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
			alt_name: "IBM",
			color_code: "#1F70C199",
		},
		{
			title: "Big Data",
			subtitle: "- Kim Akers",
			logo_path: "microsoft_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
			alt_name: "Microsoft",
			color_code: "#D83B0199",
		},
		{
			title: "Advanced Data Science",
			subtitle: "- Romeo Kienzler",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
			alt_name: "IBM",
			color_code: "#1F70C199",
		},
		{
			title: "Advanced ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
			alt_name: "Google",
			color_code: "#0C9D5899",
		},
		{
			title: "DL on Tensorflow",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
			alt_name: "deeplearning.ai",
			color_code: "#00000099",
		},
		{
			title: "Fullstack Development",
			subtitle: "- Jogesh Muppala",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
			alt_name: "Coursera",
			color_code: "#2A73CC",
		},
		{
			title: "Kuberenetes on GCP",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
			alt_name: "GCP",
			color_code: "#4285F499",
		},
		{
			title: "Cryptography",
			subtitle: "- Saurabh Mukhopadhyay",
			logo_path: "nptel_logo.png",
			certificate_link:
				"https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
			alt_name: "NPTEL",
			color_code: "#FFBB0099",
		},
		{
			title: "Cloud Architecture",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499",
		},
	],
};

// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Associate AI Engineer",
					company: "Legato Health Technology",
					company_url: "https://legatohealthtech.com/",
					logo_path: "legato_logo.png",
					duration: "June 2020 - PRESENT",
					location: "Hyderabad, Telangana",
					description:
						"I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
					color: "#0879bf",
				},
				{
					title: "Android and ML Developer",
					company: "Muffito Incorporation",
					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
					logo_path: "muffito_logo.png",
					duration: "May 2018 - Oct 2018",
					location: "Pune, Maharashtra",
					description:
						"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
					color: "#9b1578",
				},
				{
					title: "Android Developer",
					company: "FreeCopy Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/freecopy/about/",
					logo_path: "freecopy_logo.png",
					duration: "Nov 2017 - Dec 2017",
					location: "Ahmedabad, Gujarat",
					description:
						"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
					color: "#fc1f20",
				},
			],
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Data Science Research Intern",
					company: "Delhivery Pvt. Ltd.",
					company_url: "https://www.delhivery.com/",
					logo_path: "delhivery_logo.png",
					duration: "May 2019 - Sept 2019",
					location: "Gurgaon, Haryana",
					description:
						"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
					color: "#ee3c26",
				},
				{
					title: "Data Science Intern",
					company: "Intel Indexer LLC",
					company_url:
						"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
					logo_path: "intel_logo.jpg",
					duration: "Nov 2018 - Dec 2018",
					location: "Work From Home",
					description:
						"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
					color: "#0071C5",
				},
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Google Explore ML Facilitator",
					company: "Google",
					company_url: "https://about.google/",
					logo_path: "google_logo.png",
					duration: "June 2019 - April 2020",
					location: "Hyderabad, Telangana",
					description:
						"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
					color: "#4285F4",
				},
				{
					title: "Microsoft Student Partner",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/",
					logo_path: "microsoft_logo.png",
					duration: "Aug 2019 - May 2020",
					location: "Hyderabad, Telangana",
					description:
						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
					color: "#D83B01",
				},
				{
					title: "Mozilla Campus Captain",
					company: "Mozilla",
					company_url: "https://www.mozilla.org/",
					logo_path: "mozilla_logo.png",
					duration: "Oct 2019 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
					color: "#000000",
				},
				{
					title: "Developer Students Club Member",
					company: "DSC IIITDM Kurnool",
					company_url:
						"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
					logo_path: "dsc_logo.png",
					duration: "Jan 2018 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
					color: "#0C9D58",
				},
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "July 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
					color: "#181717",
				},
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"Have a look at my projects below. All of the cards link to Github where you can check out my code and view the live app.",
	avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "contactPuzzle.svg",
		description:
			"Please feel free to contact me if you wish to work together or have a look at my resume below if you are looking to recruit a new team member.",
	},
	blogSection: {
		title: "Blogs",
		subtitle:
			"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
		link: "https://ashutoshhathidara.wordpress.com",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle: "Ixelles, Bruxelles, Belgium, 1050",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/ryg7WfUnPt8sJQzW8",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+32 466 144 083",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
