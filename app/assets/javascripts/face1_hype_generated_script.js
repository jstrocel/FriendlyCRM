//	HYPE.documents["face1"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "face1_Resources";
	var documentName = "face1";
	var documentLoaderFilename = "face1_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.53333336,i:"a",e:133,r:1,s:133,o:"3"},{f:"2",t:0,d:0.53333336,i:"b",e:50,r:1,s:50,o:"3"},{f:"0",t:0,d:0.1,i:"e",e:"0.000000",r:1,s:"1.000000",o:"6"},{f:"2",t:0,d:0.1,i:"f",e:"88deg",r:1,s:"0deg",o:"5"},{f:"2",t:0,d:0.1,i:"f",e:"88deg",r:1,s:"0deg",o:"10"},{f:"0",t:0.1,d:0.1,i:"e",e:"0.919772",s:"0.000000",o:"6"},{f:"2",t:0.1,d:0.1,i:"f",e:"0deg",s:"88deg",o:"5"},{f:"2",t:0.1,d:0.1,i:"f",e:"0deg",s:"88deg",o:"10"},{f:"0",t:0.2,d:0.066666678,i:"e",e:"0.000000",s:"0.919772",o:"6"},{f:"2",t:0.2,d:0.30000001,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:0.2,d:0.30000001,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"0",t:0.26666668,d:0.099999994,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"0",t:0.36666667,d:0.099999994,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"0",t:0.46666667,d:0.099999994,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:0.5,d:0.10000002,i:"f",e:"88deg",s:"0deg",o:"5"},{f:"2",t:0.5,d:0.10000002,i:"f",e:"88deg",s:"0deg",o:"10"},{f:"0",t:0.56666666,d:0.066666663,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:0.60000002,d:0.099999964,i:"f",e:"0deg",s:"88deg",o:"5"},{f:"2",t:0.60000002,d:0.099999964,i:"f",e:"0deg",s:"88deg",o:"10"},{f:"0",t:0.63333333,d:0.066666663,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"0",t:0.69999999,d:0.066666663,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:0.69999999,d:0.23333335,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:0.69999999,d:0.23333335,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"0",t:0.76666665,d:0.066666663,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"0",t:0.83333331,d:0.10000002,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"0",t:0.93333334,d:0.066666663,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:0.93333334,d:0.36666662,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:0.93333334,d:0.36666662,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"0",t:1,d:0.066666722,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"0",t:1.0666667,d:0.39999998,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:1.3,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:1.3,d:0.10000002,i:"f",e:"88deg",s:"0deg",o:"5"},{f:"2",t:1.3,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:1.3,d:0.10000002,i:"f",e:"88deg",s:"0deg",o:"10"},{f:"2",t:1.4,d:0,i:"f",e:"88deg",s:"88deg",o:"5"},{f:"2",t:1.4,d:0.10000002,i:"f",e:"0deg",s:"88deg",o:"5"},{f:"2",t:1.4,d:0,i:"f",e:"88deg",s:"88deg",o:"10"},{f:"2",t:1.4,d:0.10000002,i:"f",e:"0deg",s:"88deg",o:"10"},{f:"0",t:1.4666667,d:0.099999905,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:1.5,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:1.5,d:0.29999995,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:1.5,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:1.5,d:0.29999995,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"0",t:1.5666666,d:0.10000014,i:"e",e:"0.919772",s:"0.000000",o:"6"},{f:"0",t:1.6666667,d:0.066666603,i:"e",e:"0.000000",s:"0.919772",o:"6"},{f:"0",t:1.7333333,d:0.099999905,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:1.8,d:0.23333335,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:1.8,d:0.23333335,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"0",t:1.8333333,d:0.10000014,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"0",t:1.9333334,d:0.099999905,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:2.0333333,d:0.10000014,i:"f",e:"88deg",s:"0deg",o:"5"},{f:"2",t:2.0333333,d:0.10000014,i:"f",e:"88deg",s:"0deg",o:"10"},{f:"0",t:2.0333333,d:0.066666603,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"0",t:2.0999999,d:0.066666842,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:2.1333334,d:0,i:"f",e:"88deg",s:"88deg",o:"5"},{f:"2",t:2.1333334,d:0.099999905,i:"f",e:"0deg",s:"88deg",o:"5"},{f:"2",t:2.1333334,d:0,i:"f",e:"88deg",s:"88deg",o:"10"},{f:"2",t:2.1333334,d:0.099999905,i:"f",e:"0deg",s:"88deg",o:"10"},{f:"0",t:2.1666667,d:0.066666603,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:2.2333333,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:2.2333333,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:2.2333333,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:2.2333333,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:2.2333333,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:2.2333333,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:2.2333333,d:0.099999905,i:"f",e:"88deg",s:"0deg",o:"10"},{f:"2",t:2.2333333,d:0.099999905,i:"f",e:"88deg",s:"0deg",o:"5"},{f:"0",t:2.2333333,d:0.066666603,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"0",t:2.3,d:0.10000014,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:2.3333333,d:0,i:"f",e:"88deg",s:"88deg",o:"10"},{f:"2",t:2.3333333,d:0,i:"f",e:"88deg",s:"88deg",o:"10"},{f:"2",t:2.3333333,d:0,i:"f",e:"88deg",s:"88deg",o:"10"},{f:"2",t:2.3333333,d:0.10000014,i:"f",e:"0deg",s:"88deg",o:"10"},{f:"2",t:2.3333333,d:0,i:"f",e:"88deg",s:"88deg",o:"5"},{f:"2",t:2.3333333,d:0,i:"f",e:"88deg",s:"88deg",o:"5"},{f:"2",t:2.3333333,d:0,i:"f",e:"88deg",s:"88deg",o:"5"},{f:"2",t:2.3333333,d:0.10000014,i:"f",e:"0deg",s:"88deg",o:"5"},{f:"0",t:2.4000001,d:0.066666603,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"2",t:2.4333334,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:2.4333334,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:2.4333334,d:0,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:2.4333334,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:2.4333334,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"2",t:2.4333334,d:0,i:"f",e:"0deg",s:"0deg",o:"5"},{f:"0",t:2.4666667,d:0.066666603,i:"e",e:"0.000000",s:"1.000000",o:"6"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:2.5333333}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"3":{o:"content-box",h:"face.png",x:"visible",a:133,q:"100% 100%",b:50,j:"absolute",r:"inline",c:334,k:"div",z:"1",d:300},"10":{o:"content-box",h:"eyeright.png",x:"visible",a:354,q:"100% 100%",b:216,j:"absolute",r:"inline",c:80,k:"div",z:"6",d:57,aY:"2",f:"0deg"},"6":{o:"content-box",h:"mouthopen.png",x:"visible",a:283,q:"100% 100%",b:301,j:"absolute",r:"inline",c:38,k:"div",z:"4",d:54,e:"1.000000"},"19":{o:"content-box",h:"mouthclosed-1.png",x:"visible",a:285,q:"100% 100%",b:301,j:"absolute",r:"inline",c:36,k:"div",z:"8",d:49},"5":{o:"content-box",h:"eye.png",x:"visible",a:173,q:"100% 100%",b:216,j:"absolute",r:"inline",c:80,k:"div",z:"3",d:57,aY:"2",f:"0deg"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("face1_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

