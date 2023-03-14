(function () {
    "use strict";
    const host = "tdtu.edu.vn";
    chrome.tabs.onUpdated.addListener(function (a, b, c) {
        if (c.url.includes(host) && c.status == "complete") {
            if (c.url.includes("stdportal." + host + "/Login")) return chrome.tabs.sendMessage(a, { message: "un_authenticated" }, () => {});
            if (c.url.includes("stdportal." + host + "/?Token")) return chrome.tabs.sendMessage(a, { message: "install_main" }, () => {});
            if (c.url.includes("stdportal." + host + "/Home/Index")) return chrome.tabs.sendMessage(a, { message: "install_main" }, () => {});
            if (c.url.includes("stdportal." + host + "/home/index")) return chrome.tabs.sendMessage(a, { message: "install_main" }, () => {});
            if (c.url.includes("stdportal." + host + "/main/thongtinsinhvien")) return chrome.tabs.sendMessage(a, { message: "install_student_info" }, () => {});
            if (c.url.includes("lichhoc-lichthi." + host + "/tkb2.aspx")) return chrome.tabs.sendMessage(a, { message: "install_course_schedule" }, () => {});
            if (c.url.includes(host)) return chrome.tabs.sendMessage(a, { message: "install_header_only" }, () => {});
        }
    });
})();
