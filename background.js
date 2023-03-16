(function () {
    "use strict";
    const host = "tdtu.edu.vn";
    const elearningAbility = "elearning-ability";
    chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tabInfo) {
        if (tabInfo.url && tabInfo.url.includes(host) && tabInfo.status == "complete") {
            const requestURL = new URL(tabInfo.url?.toLowerCase());
            if (!requestURL.pathname.includes("/login")) {
                requestURL.pathname == "/" ? chrome.tabs.sendMessage(tabID, { message: "install_main" }) : undefined;
                !requestURL.href.includes(elearningAbility) ? chrome.tabs.sendMessage(tabID, { message: "install_header" }) : undefined;
            }
        }
    });
})();
