var zips = [30002,30003,30004,30005,30006,30007,30008,30009,30010,30011,30012,30013,30014,30015,30016,30017,30018,30019,30021,30022,30023,30024,30025,30026,30028,30029,30030,30031,30032,30033,30034,30035,30036,30037,30038,30039,30040,30041,30042,30043,30044,30045,30046,30047,30048,30052,30054,30055,30056,30058,30060,30061,30062,30063,30064,30065,30066,30067,30068,30069,30070,30071,30072,30074,30075,30076,30077,30078,30079,30080,30081,30082,30083,30084,30085,30086,30087,30088,30090,30091,30092,30093,30094,30095,30096,30097,30098,30099,30101,30102,30103,30104,30105,30106,30107,30108,30109,30110,30111,30113,30114,30115,30116,30117,30118,30119,30120,30121,30122,30123,30124,30125,30126,30127,30129,30132,30133,30134,30135,30137,30138,30139,30140,30141,30142,30143,30144,30145,30146,30147,30148,30149,30150,30151,30152,30153,30154,30157,30161,30162,30163,30164,30165,30168,30170,30171,30172,30173,30175,30176,30177,30178,30179,30180,30182,30183,30184,30185,30187,30188,30189,30204,30205,30206,30212,30213,30214,30215,30216,30217,30218,30219,30220,30222,30223,30224,30228,30229,30230,30232,30233,30234,30236,30237,30238,30240,30241,30248,30250,30251,30252,30253,30256,30257,30258,30259,30260,30261,30263,30264,30265,30266,30268,30269,30271,30272,30273,30274,30275,30276,30277,30281,30284,30285,30286,30287,30288,30289,30290,30291,30292,30293,30294,30295,30296,30297,30298,30301,30302,30303,30304,30305,30306,30307,30308,30309,30310,30311,30312,30313,30314,30315,30316,30317,30318,30319,30320,30321,30322,30323,30324,30325,30326,30327,30328,30329,30330,30331,30332,30333,30334,30335,30336,30337,30338,30339,30340,30341,30342,30343,30344,30345,30346,30347,30348,30349,30350,30351,30353,30354,30355,30356,30357,30358,30359,30360,30361,30362,30363,30364,30365,30366,30367,30368,30369,30370,30371,30374,30375,30376,30377,30378,30379,30380,30381,30384,30385,30386,30387,30388,30389,30390,30392,30394,30396,30398,30399,30401,30410,30411,30412,30413,30414,30415,30417,30420,30421,30423,30424,30425,30426,30427,30428,30429,30434,30436,30438,30439,30441,30442,30445,30446,30447,30448,30449,30450,30451,30452,30453,30454,30455,30456,30457,30458,30459,30460,30461,30464,30466,30467,30470,30471,30473,30474,30475,30477,30499,30501,30502,30503,30504,30505,30506,30507,30510,30511,30512,30513,30514,30515,30516,30517,30518,30519,30520,30521,30522,30523,30525,30527,30528,30529,30530,30531,30533,30534,30535,30537,30538,30539,30540,30541,30542,30543,30544,30545,30546,30547,30548,30549,30552,30553,30554,30555,30557,30558,30559,30560,30562,30563,30564,30565,30566,30567,30568,30571,30572,30573,30575,30576,30577,30580,30581,30582,30596,30597,30598,30599,30601,30602,30603,30604,30605,30606,30607,30608,30609,30610,30612,30613,30619,30620,30621,30622,30623,30624,30625,30627,30628,30629,30630,30631,30633,30634,30635,30638,30639,30641,30642,30643,30645,30646,30647,30648,30650,30655,30656,30660,30662,30663,30664,30665,30666,30667,30668,30669,30671,30673,30677,30678,30680,30683,30701,30703,30705,30707,30708,30710,30711,30719,30720,30721,30722,30724,30725,30726,30728,30730,30731,30732,30733,30734,30735,30736,30738,30739,30740,30741,30742,30746,30747,30750,30751,30752,30753,30755,30756,30757,30802,30803,30805,30806,30807,30808,30809,30810,30811,30812,30813,30814,30815,30816,30817,30818,30819,30820,30821,30822,30823,30824,30828,30830,30833,30901,30903,30904,30905,30906,30907,30909,30910,30911,30912,30913,30914,30916,30917,30919,30999,31001,31002,31003,31004,31005,31006,31007,31008,31009,31010,31011,31012,31013,31014,31015,31016,31017,31018,31019,31020,31021,31022,31023,31024,31025,31027,31028,31029,31030,31031,31032,31033,31034,31035,31036,31037,31038,31039,31040,31041,31042,31044,31045,31046,31047,31049,31050,31051,31052,31054,31055,31057,31058,31060,31061,31062,31063,31064,31065,31066,31067,31068,31069,31070,31071,31072,31073,31075,31076,31077,31078,31079,31081,31082,31083,31084,31085,31086,31087,31088,31089,31090,31091,31092,31093,31094,31095,31096,31097,31098,31099,31106,31107,31119,31126,31131,31139,31141,31145,31146,31150,31156,31191,31192,31193,31195,31196,31197,31198,31199,31201,31202,31203,31204,31205,31206,31207,31208,31209,31210,31211,31212,31213,31216,31217,31220,31221,31294,31295,31296,31297,31298,31299,31301,31302,31303,31304,31305,31307,31308,31309,31310,31312,31313,31314,31315,31316,31318,31319,31320,31321,31322,31323,31324,31326,31327,31328,31329,31331,31332,31333,31401,31402,31403,31404,31405,31406,31407,31408,31409,31410,31411,31412,31414,31415,31416,31418,31419,31420,31421,31422,31498,31499,31501,31502,31503,31510,31512,31513,31515,31516,31518,31519,31520,31521,31522,31523,31524,31525,31527,31532,31533,31534,31535,31537,31539,31542,31543,31544,31545,31546,31547,31548,31549,31550,31551,31552,31553,31554,31555,31556,31557,31558,31560,31561,31563,31564,31565,31566,31567,31568,31569,31598,31599,31601,31602,31603,31604,31605,31606,31620,31622,31623,31624,31625,31626,31627,31629,31630,31631,31632,31634,31635,31636,31637,31638,31639,31641,31642,31643,31645,31646,31647,31648,31649,31650,31698,31699,31701,31702,31703,31704,31705,31706,31707,31708,31709,31710,31711,31712,31713,31714,31715,31716,31717,31718,31720,31722,31723,31724,31725,31726,31727,31728,31729,31730,31732,31733,31734,31735,31736,31737,31738,31739,31740,31741,31742,31743,31744,31745,31746,31747,31749,31750,31751,31752,31753,31754,31756,31757,31758,31759,31760,31761,31762,31763,31764,31765,31766,31767,31768,31769,31770,31771,31772,31773,31774,31775,31776,31777,31778,31779,31780,31781,31782,31783,31784,31785,31786,31787,31789,31790,31791,31792,31793,31794,31795,31796,31797,31798,31799,31801,31803,31804,31805,31806,31807,31808,31810,31811,31812,31814,31815,31816,31820,31821,31822,31823,31824,31825,31826,31827,31829,31830,31831,31832,31833,31836,31901,31902,31903,31904,31905,31906,31907,31908,31909,31914,31917,31993,31994,31995,31997,31998,31999,39901];
var cities = ["Avondale Estates","Norcross","Alpharetta","Alpharetta","Marietta","Marietta","Marietta","Alpharetta","Norcross","Auburn","Conyers","Conyers","Covington","Covington","Covington","Grayson","Jersey","Dacula","Clarkston","Alpharetta","Alpharetta","Suwanee","Social Circle","North Metro","Cumming","North Metro","Decatur","Decatur","Decatur","Decatur","Decatur","Decatur","Decatur","Decatur","Lithonia","Snellville","Cumming","Cumming","Lawrenceville","Lawrenceville","Lawrenceville","Lawrenceville","Lawrenceville","Lilburn","Lilburn","Loganville","Oxford","Mansfield","Newborn","Lithonia","Marietta","Marietta","Marietta","Marietta","Marietta","Marietta","Marietta","Marietta","Marietta","Marietta","Porterdale","Norcross","Pine Lake","Redan","Roswell","Roswell","Roswell","Snellville","Scottdale","Smyrna","Smyrna","Smyrna","Stone Mountain","Tucker","Tucker","Stone Mountain","Stone Mountain","Stone Mountain","Marietta","Norcross","Norcross","Norcross","Conyers","Duluth","Duluth","Duluth","Duluth","Duluth","Acworth","Acworth","Adairsville","Aragon","Armuchee","Austell","Ball Ground","Bowdon","Bowdon Junction","Bremen","Clarkdale","Buchanan","Canton","Canton","Carrollton","Carrollton","Carrollton","Carrollton","Cartersville","Cartersville","Lithia Springs","Cassville","Cave Spring","Cedartown","Mableton","Powder Springs","Coosa","Dallas","Douglasville","Douglasville","Douglasville","Emerson","Esom Hill","Fairmount","Felton","Hiram","Holly Springs","Jasper","Kennesaw","Kingston","Lebanon","Lindale","Marble Hill","Mount Berry","Mount Zion","Nelson","Kennesaw","Rockmart","Douglasville","Dallas","Rome","Rome","Rome","Rome","Rome","Austell","Roopville","Rydal","Shannon","Silver Creek","Talking Rock","Tallapoosa","Tate","Taylorsville","Temple","Villa Rica","Waco","Waleska","White","Whitesburg","Winston","Woodstock","Woodstock","Barnesville","Brooks","Concord","Experiment","Fairburn","Fayetteville","Fayetteville","Flovilla","Franklin","Gay","Glenn","Grantville","Greenville","Griffin","Griffin","Hampton","Haralson","Hogansville","Inman","Jackson","Jenkinsburg","Jonesboro","Jonesboro","Jonesboro","Lagrange","Lagrange","Locust Grove","Lovejoy","Luthersville","McDonough","McDonough","Meansville","Milner","Molena","Moreland","Morrow","Lagrange","Newnan","Newnan","Newnan","Orchard Hill","Palmetto","Peachtree City","Newnan","Red Oak","Rex","Riverdale","Sargent","Senoia","Sharpsburg","Stockbridge","Sunny Side","The Rock","Thomaston","Morrow","Conley","Turin","Tyrone","Union City","Williamson","Woodbury","Ellenwood","Zebulon","Riverdale","Forest Park","Forest Park","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","-","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","-","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","-","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","-","Atlanta","-","Atlanta","-","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","-","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Swainsboro","Ailey","Alamo","Alston","Bartow","Bellville","Brooklet","Claxton","Cobbtown","Collins","Daisy","Dover","Garfield","Girard","Glennville","Glenwood","Hagan","Louisville","Lyons","Manassas","Metter","Midville","Millen","Mount Vernon","Newington","Norristown","Nunez","Oliver","Portal","Pulaski","Register","Reidsville","Rockledge","Rocky Ford","Sardis","Soperton","Statesboro","Statesboro","Statesboro","Statesboro","Stillmore","-","Sylvania","Tarrytown","Twin City","Uvalda","Vidalia","Vidalia","Wadley","Reidsville","Gainesville","Chestnut Mountain","Gainesville","Gainesville","-","Gainesville","Gainesville","Alto","Baldwin","Blairsville","Blue Ridge","Blairsville","Buford","Bowersville","Braselton","Buford","Buford","Canon","Carnesville","Cherrylog","Clarkesville","Clayton","Clermont","Cleveland","Commerce","Commerce","Cornelia","Dahlonega","Dawsonville","Demorest","Dillard","Eastanollee","East Ellijay","Ellijay","Epworth","Flowery Branch","Gillsville","Demorest","Helen","Hiawassee","Homer","Hoschton","Jefferson","Lakemont","Lavonia","Lula","Mc Caysville","Martin","Maysville","Mineral Bluff","Morganton","Mountain City","Mount Airy","Murrayville","Nicholson","Oakwood","Pendergrass","Rabun Gap","Sautee Nacoochee","Suches","Tallulah Falls","Talmo","Tiger","Toccoa","Turnerville","Wiley","Young Harris","Alto","Dahlonega","Toccoa Falls","Commerce","Athens","Athens","Athens","Athens","Athens","Athens","Athens","Athens","Athens","-","Athens","-","Arnoldsville","Bethlehem","Bishop","Bogart","Bostwick","Bowman","Buckhead","Carlton","Colbert","Comer","Crawford","Crawfordville","Danielsville","Dewy Rose","Elberton","Farmington","Franklin Springs","Good Hope","Greensboro","Hartwell","High Shoals","Hull","Ila","Lexington","Madison","Monroe","Monroe","Rayle","Royston","Rutledge","Sharon","Siloam","Statham","Stephens","Tignall","Union Point","Maxeys","Washington","Watkinsville","White Plains","Winder","Winterville","Calhoun","Calhoun","Chatsworth","Chickamauga","Cisco","Cohutta","Crandall","Dalton","Dalton","Dalton","Dalton","Eton","Flintstone","Graysville","La Fayette","Lyerly","Menlo","Oakman","Plainville","Ranger","Resaca","Ringgold","Rising Fawn","Rock Spring","Rocky Face","Rossville","Fort Oglethorpe","Sugar Valley","Summerville","Lookout Mountain","Tennga","Trenton","Trion","Tunnel Hill","Varnell","Wildwood","Appling","Avera","Blythe","Boneville","Camak","Dearing","Evans","Gibson","Gough","Gracewood","Grovetown","Harlem","Hephzibah","Keysville","Lincolnton","Matthews","Mesena","Mitchell","Norwood","Perkins","Stapleton","Thomson","Warrenton","Waynesboro","Wrens","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Augusta","Abbeville","Adrian","Allentown","Bolingbroke","Bonaire","Butler","Byromville","Byron","Cadwell","Cordele","Chauncey","Chester","Clinchfield","Cochran","Cordele","Culloden","Danville","Davisboro","Dexter","Dry Branch","Dublin","Dudley","Eastman","Eatonton","Elko","East Dublin","Centerville","Forsyth","Fort Valley","Gordon","Gray","Haddock","Hardwick","Harrison","Hawkinsville","Helena","Hillsboro","Howard","Dublin","Ideal","Irwinton","Jeffersonville","Jewell","Juliette","Kathleen","Kite","Knoxville","Lilly","Lizella","Mc Intyre","Mc Rae","Marshallville","Mauk","Milan","Milledgeville","Milledgeville","Montezuma","Monticello","Montrose","Musella","Oconee","Oglethorpe","Perry","Pinehurst","Pineview","Pitts","Plainfield","Rentz","Reynolds","Rhine","Roberta","Rochelle","Rupert","Sandersville","Scotland","Seville","Shady Dale","Smarr","Sparta","Warner Robins","Tennille","Toomsboro","Unadilla","Vienna","Warner Robins","Warthen","Warner Robins","Wrightsville","Yatesville","Warner Robins","Warner Robins","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Atlanta","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Macon","Allenhurst","Bloomingdale","Clyo","Crescent","Darien","Eden","Ellabell","Fleming","Hinesville","Guyton","Hinesville","Fort Stewart","Fort Stewart","Ludowici","Meldrim","Meridian","Midway","Pembroke","Pooler","Riceboro","Richmond Hill","Rincon","Sapelo Island","Tybee Island","Springfield","Townsend","-","Walthourville","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Savannah","Waycross","Waycross","Waycross","Alma","Ambrose","Baxley","Baxley","Blackshear","Bristol","Broxton","Brunswick","Brunswick","Saint Simons Island","Brunswick","Brunswick","Brunswick","Jekyll Island","Denton","Douglas","Douglas","Douglas","Folkston","Hazlehurst","Hoboken","Hortense","Jacksonville","Jesup","Jesup","Kings Bay","Kingsland","Lumber City","Manor","Mershon","Millwood","Nahunta","Nicholls","Odum","Offerman","Patterson","Saint Marys","Screven","Sea Island","Surrency","Waresboro","Waverly","Waynesville","West Green","White Oak","Woodbine","Jesup","Jesup","Valdosta","Valdosta","Valdosta","Valdosta","Valdosta","Valdosta","Adel","Alapaha","Argyle","Axson","Barney","Boston","Cecil","Dixie","Du Pont","Fargo","Hahira","Homerville","Lakeland","Lake Park","Lenox","Morven","Nashville","Naylor","Pearson","Quitman","Ray City","Saint George","Sparks","Statenville","Stockton","Willacoochee","Valdosta","Valdosta","Albany","Albany","Albany","Albany","Albany","Albany","Albany","Albany","Americus","Americus","Andersonville","Arabi","Arlington","Ashburn","Attapulgus","Baconton","Bainbridge","Bainbridge","Barwick","Berlin","Blakely","Bluffton","Brinson","Bronwood","Brookfield","Cairo","Calvary","Camilla","Cedar Springs","Chula","Climax","Cobb","Coleman","Colquitt","Coolidge","Cotton","Cuthbert","Damascus","Dawson","De Soto","Doerun","Donalsonville","Edison","Ellenton","Enigma","Fitzgerald","Fort Gaines","Fowlstown","Funston","Georgetown","Hartsfield","Thomasville","Thomasville","Iron City","Irwinville","Jakin","Leary","Leesburg","Leslie","Meigs","Morgan","Morris","Moultrie","Mystic","Newton","Norman Park","Oakfield","Ochlocknee","Ocilla","Omega","Moultrie","Parrott","Pavo","Pelham","Plains","Poulan","Putney","Rebecca","Sale City","Sasser","Shellman","Smithville","Sumner","Sycamore","Sylvester","Thomasville","Tifton","Tifton","Ty Ty","Warwick","Whigham","Wray","Thomasville","Box Springs","Buena Vista","Cataula","Cusseta","Ellaville","Ellerslie","Fortson","Geneva","Hamilton","Junction City","Louvale","Lumpkin","Manchester","Midland","Omaha","Pine Mountain","Pine Mountain Valley","Preston","Richland","Shiloh","Talbotton","Upatoi","Warm Springs","Waverly Hall","Weston","West Point","Woodland","Columbus","Columbus","Columbus","Columbus","Fort Benning","Columbus","Columbus","Columbus","Columbus","Columbus","Columbus","Columbus","Columbus","Fort Benning","Columbus","Columbus","Columbus","Atlanta"];
var index = 0;
var touch = 0;
var count = cities.length;
var ansArr = [];
var go = 0;



function fNameFix() {
    var str = document.getElementById("fName");
   str.value =  toTitleCase(str.value);

}
function lNameFix() {
    var x = document.getElementById("lName");
    x.value = toTitleCase(x.value);
}
function toTitleCase(str)
{
    return str.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
function teleFix()
{
	var str = document.getElementById("tele");
	phonenumber(str);

}
function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return true;       
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}

function nameCheck(){	
	//index is a global variable
	var str = document.getElementById("city");
	index = index +1;
	console.log(index);
	var i = 0;
	var j = 0;
	var arrLen = cities.length;
	var name; 
	var letter;
	var realLetter;
	var auto = "";
    var matchNum = 0;
    //get every name in array
			for(i = 0; i<arrLen; i++){
				name = cities[i];
				//check each letter in each name
				for(j = 0; j<index; j++){
					letter = name.charAt(j);
				    //realLetter = str.charAt(j);
				    realLetter = str.value[j];
				    
			       if(letter != realLetter){
			       	//if they arent the same do nothing
			      
			       }else {
			       	//if they are make it the proper name
			       	  
			       	    auto = name;
			       	    index--;
			       	   
			       }
			   }
			}

			  document.getElementById("city").value = auto;
						console.log("auto");
			       	    console.log(auto.value);


}
