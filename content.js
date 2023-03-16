(function () {
    "use strict";

    const collectStudentData = () => {
        let allRelationship = [];
        const mssv = document.querySelector('input[id="MSSV"]')?.value;
        const avatar = `https://studentinfo.tdtu.edu.vn/Home/GetImage?mssv=${mssv}`;
        const last_middle_name = document.querySelector('input[name="HoLot"]')?.value;
        const first_name = document.querySelector('input[name="Ten"]')?.value;
        const dOb = document.querySelector('input[name="NgaySinh"]')?.value;
        const gender = document.querySelector('input[name="GioiTinh"]')?.value;
        const _class = document.querySelector('input[name="Lop"]')?.value;
        const faculty = document.querySelector('input[name="Khoa"]')?.value;
        const major = document.querySelector('input[name="Nganh"]')?.value;
        const trainingMode = document.querySelector('input[name="HeDaoTao"]')?.value;
        const placeOfFamily = document.querySelector('input[id="NoiSinhKhac')?.value;
        const originHometown = document.querySelector('input[id="NguyenQuan"]')?.value;
        const nationality = document.querySelector('input[id="QuocTichKhac"]')?.value;
        const IDNumber = document.querySelector('input[id="CMND"]')?.value;
        const DateOfIDNumber = document.querySelector('input[id="NgayCapCMND"]')?.value;
        const homeTel = document.querySelector('input[id="DienThoaiNha"]')?.value;
        const studentTel = document.querySelector('input[id="DienThoaiDiDong"]')?.value;
        const personalEmail = document.querySelector('input[id="Email"]')?.value;
        const currentAddress = document.querySelector("span#FullDiaChiLienLac")?.innerHTML;
        const originHometownAddress = document.querySelector("span#FullDiaChiHoKhau")?.innerHTML;
        const allRelation = document.querySelectorAll('a[data-id="Relation"]') || [];
        allRelation.forEach((e, i) => {
            allRelationship.push({
                relationShip: e.innerHTML,
                fullName: document.querySelectorAll('a[data-id="FullName"]')[i]?.innerHTML,
                birthYear: document.querySelectorAll('a[data-id="NamSinh"]')[i]?.innerHTML,
                career: document.querySelectorAll('a[data-id="Career"]')[i]?.innerHTML,
                phoneNumber: document.querySelectorAll('a[data-id="DTLienLac"]')[i]?.innerHTML,
                email: document.querySelectorAll('a[data-id="Email"]')[i]?.innerHTML,
                currentAddress: document.querySelectorAll('a[data-id="DiaChiNoiO"]')[i]?.innerHTML,
            });
        });
        const admissionRecords = Array.from({ length: 3 }, (_, i) => {
            return {
                grade: 10 + i,
                province: document.querySelector(`button[data-id="TruongTinhLop${10 + i}"]`)?.title,
                schoolName: document.querySelector(`button[data-id="Lop${10 + i}"]`)?.title,
                gpa: document.querySelector(`button[data-id="Lop${10 + i}_HocTap_DTB"]`)?.title,
                performance: document.querySelector(`button[data-id="Lop${10 + i}_HocTap_XL"]`)?.title,
                conduct: document.querySelector(`button[data-id="Lop${10 + i}_RenLuyen_XL"]`)?.title,
            };
        });
        return {
            admissionInfo: { mssv, avatar, last_middle_name, first_name, dOb, gender, _class, faculty, major, trainingMode },
            studentInfo: { placeOfFamily, originHometown, nationality, IDNumber, DateOfIDNumber, homeTel, studentTel, personalEmail, currentAddress, originHometownAddress },
            familyRelations: allRelationship,
            admissionRecords,
        };
    };

    const backgroundImageRandom = function () {
        const list = [
            "https://images.unsplash.com/photo-1659878997289-b9ab5a0663b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2xhc3Ntb3JwaGlzbXxlbnwwfHwwfHw%3D&w=1000&q=80",
            "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
            "https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
            "https://images.unsplash.com/photo-1661783758573-e1fac356dba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",
            "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            "https://images.unsplash.com/photo-1632373564036-cc8b7ce520c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2467&q=80",
            "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            "https://images.unsplash.com/photo-1666115883766-efa38b52630c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
            "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        ];
        return list[Math.floor(Math.random() * list.length)];
    };

    const menuSections = [
        {
            sectionName: "Education",
            gridList: [
                {
                    name: "Course Schedule",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
                    link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
                },
                {
                    name: "Exam Schedule",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/2370/2370366.png",
                    link: "https://lichhoc-lichthi.tdtu.edu.vn/xemlichthi.aspx",
                },
                {
                    name: "Academic Plans",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/3589/3589787.png",
                    link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
                },
                {
                    name: "Register Subjects",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/8944/8944034.png",
                    link: "http://dkmh.tdt.edu.vn/default.aspx",
                },
                {
                    name: "Subjects Registration Result",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/9938/9938328.png",
                    link: "http://thoikhoabieudukien.tdtu.edu.vn/kqdk",
                },
                {
                    name: "Education Score Result",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/334/334345.png",
                    link: "https://ketquahoctap.tdtu.edu.vn/home/diemhocky",
                },
            ],
        },
        {
            sectionName: "Student Affairs",
            gridList: [
                {
                    name: "Student Information",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/9240/9240264.png",
                    link: "https://stdportal.tdtu.edu.vn/main/thongtinsinhvien",
                },
                {
                    name: "Training Evaluation",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/9489/9489115.png",
                    link: "https://stdportal.tdtu.edu.vn/main/hoatdongphongtrao",
                },
                {
                    name: "Register Certificate",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/6102/6102106.png",
                    link: "https://stdportal.tdtu.edu.vn/main/dangkychungnhansinhvien",
                },
                {
                    name: "Certificate Registration Result",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/2912/2912780.png",
                    link: "https://stdportal.tdtu.edu.vn/main/ketquachungnhan",
                },
                {
                    name: "Notifications",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/9979/9979251.png",
                    link: "https://studentnews.tdtu.edu.vn/Home/Index",
                },
                {
                    name: "Password",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/3176/3176329.png",
                    link: "https://stdportal.tdtu.edu.vn/main/thongtinsinhvien/doimatkhau",
                },
            ],
        },
        {
            sectionName: "TDTU Learning Management System",
            gridList: [
                {
                    name: "E-learning",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/2972/2972272.png",
                    link: "https://stdportal.tdtu.edu.vn/main/elearningv2",
                },
                {
                    name: "E-learning Ability",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/9166/9166953.png",
                    link: "https://elearning-ability.tdtu.edu.vn/",
                },
                {
                    name: "E-learning CAIT",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/3463/3463341.png",
                    link: "http://cait.tdtu.edu.vn/elearning",
                },
            ],
        },
        {
            sectionName: "Tuition and Service Charge",
            gridList: [
                {
                    name: "Tuition",
                    thumbnail: "https://cdn-icons-png.flaticon.com/512/5609/5609462.png",
                    link: "https://hocphilephi.tdtu.edu.vn/",
                },
            ],
        },
    ];

    const setStyleForElement = function (element, styles) {
        for (const property in styles) element.style[property] = styles[property];
    };

    const nester = function (el, n) {
        if (typeof n === "string") {
            var t = document.createTextNode(n);
            el.appendChild(t);
        } else if (n instanceof Array) {
            for (var i = 0; i < n.length; i++) {
                if (typeof n[i] === "string") {
                    var t = document.createTextNode(n[i]);
                    el.appendChild(t);
                } else if (n[i] instanceof Node) {
                    el.appendChild(n[i]);
                }
            }
        } else if (n instanceof Node) {
            el.appendChild(n);
        }
        return el;
    };

    const createElement = function (tagName, props, nest) {
        const el = document.createElement(tagName);
        if (props)
            for (var name in props) {
                if (name.indexOf("on") === 0) {
                    el.addEventListener(name.substr(2).toLowerCase(), props[name], false);
                } else {
                    el.setAttribute(name, props[name]);
                }
            }
        if (!nest) return el;
        return nester(el, nest);
    };

    const prependElementToDOM = (parent, element) => parent.prepend(element);

    const insertElementToDOM = (parent, element) => parent.appendChild(element);

    const isAccessibleInstallElement = function ({ tagName = "div", id = null, className = null, attributes = null }, callback) {
        if (document.querySelector(tagName + id ? `#${id}` : "" + className ? `#${className}` : "")) return callback("Element has already installed", null);
        const element = document.createElement(tagName);
        id ? (element.id = id) : undefined;
        className ? (element.className = className) : undefined;
        attributes ? element.setAttribute(attributes) : undefined;
        return callback(null, element);
    };

    const getStudentInfo = function () {
        const headerInfo = document.querySelector("header#header div.header-nav span.font-weight-bold");
        if (!headerInfo) return null;
        const data = headerInfo.innerHTML.trim().split(" ");
        const name = `${data[data.length - 3]} ${data[data.length - 2]}`;
        const studentId = data[data.length - 1].replace("(", "").replace(")", "");
        return { name, email: `${studentId}@student.tdtu.edu.vn`, studentId, avatar: `https://studentinfo.tdtu.edu.vn/Home/GetImage?mssv=${studentId}` };
    };

    const installHeader = function () {
        const mainWrapper = document.querySelector("div#std-main-wrapper");
        if (!mainWrapper) return;
        isAccessibleInstallElement({ tagName: "header", id: "std-header" }, function (error, headerElement) {
            if (error) return;
            const signOutButton = createElement("a", { class: "std-sign-out-button", href: "https://stdportal.tdtu.edu.vn/Login/SignOut" }, "Sign Out");
            const headerTitle = createElement("p", { class: "header-title" }, "Ton Duc Thang University Student Portal");
            const logoImage = createElement("img", { style: "margin-right: 20px", src: "https://stdportal.tdtu.edu.vn/images/logo.png", height: "30px" }, null);
            const homeLink = createElement("a", { href: "https://stdportal.tdtu.edu.vn" }, logoImage);
            const logoContainer = createElement("div", { style: "display:flex; align-items: center" }, [homeLink, headerTitle]);
            const header = createElement("header", { id: "std-header" }, [logoContainer, signOutButton]);
            insertElementToDOM(mainWrapper, header);
        });
    };

    const installMainPage = function () {
        UI.resetAll();
        UI.installBackground();
        UI.installContainer();
        const mainContainer = UI.getMainContainer();
        if (!mainContainer) return;
        isAccessibleInstallElement({ tagName: "div", id: "std-sub-header" }, function (err, subHeaderElement) {
            if (err) return;
            const quote = `Welcome back to the student portal! It's great to have you here again. Let's continue your educational journey and achieve your goals together. Hope you have a nice day!`;
            const svgAvatarFrame = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185 196" aria-hidden="true" class="profile-background"><defs><path id="f94b451435b3a97a03f35aa6ed7b79c0b" d="M0 0h185v196H0z"></path><path d="M133.685 175C162.38 175 185 153.618 185 127.246c0-19.838-11.668-36.944-29.884-45.021C154.997 40.173 124.636 10 85.823 10c-25.36 0-43.575 13.305-55.243 29.341-23.336-6.058-48.457 11.285-49.172 37.776C-40.022 80.917-53 100.28-53 123.327c0 27.796 24.526 51.554 57.149 51.554l129.536.119z" id="f94b451435b3a97a03f35aa6ed7b79c0e"></path><linearGradient x1="19.823%" y1="45.17%" x2="-1.128%" y2="45.17%" id="f94b451435b3a97a03f35aa6ed7b79c0a"><stop stop-color="#FFF" offset="0%"></stop><stop stop-color="#FFF" stop-opacity="0" offset="100%"></stop></linearGradient><filter x="-4.6%" y="-6.7%" width="109.2%" height="113.3%" filterUnits="objectBoundingBox" id="f94b451435b3a97a03f35aa6ed7b79c0d"><feGaussianBlur stdDeviation="6.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset dy="9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.133002328 0" in="shadowInnerInner1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><mask id="f94b451435b3a97a03f35aa6ed7b79c0c" fill="url(#f94b451435b3a97a03f35aa6ed7b79c0a)"><use xlink:href="#f94b451435b3a97a03f35aa6ed7b79c0b"></use></mask><g fill-rule="nonzero" mask="url(#f94b451435b3a97a03f35aa6ed7b79c0c)" fill="#000"><use filter="url(#f94b451435b3a97a03f35aa6ed7b79c0d)" xlink:href="#f94b451435b3a97a03f35aa6ed7b79c0e"></use></g></g></svg>`;
            const staticImage = createElement("div", { class: "static-avatar", style: `background: url('${getStudentInfo()?.avatar}') no-repeat center; background-size: cover` });
            const profileAvatar = createElement("div", { class: "profile-avatar", style: "top: 30px" });
            profileAvatar.innerHTML = svgAvatarFrame;
            prependElementToDOM(profileAvatar, staticImage);
            const userInfo = createElement("div", { class: "user-info", style: "padding: 28px" }, [
                createElement("p", { style: "font-size: 28px; color: #1d1d1f; font-weight: bold; margin: 0;" }, getStudentInfo()?.name),
                createElement("p", { style: "font-size: 16px; color: black; opacity: 0.7;" }, getStudentInfo()?.email),
            ]);
            const avatarCard = createElement("div", { class: "std-info-card" }, [profileAvatar, userInfo]);
            const welcomeText = createElement("div", { style: "position: absolute; width: 70%; padding: 60px" }, [
                createElement("h1", { style: "margin: 0; font-size: 30px" }, `Welcome back, ${getStudentInfo()?.name}!`),
                createElement("p", { style: "font-size: 18px; color: #4f4f4f" }, quote),
            ]);
            const graphic3DImage = createElement("img", { src: "https://cdn3d.iconscout.com/3d/premium/thumb/graphic-design-5690847-4759147.png", width: "310px" }, null);
            const graphicWrapper = createElement("div", { style: "display: flex; width: 100%; height: 100%; justify-content: flex-end" }, graphic3DImage);
            const welcomeContainer = createElement("div", { class: "std-welcome-container" }, [graphicWrapper, welcomeText]);
            const subHeader = createElement("div", { id: "std-sub-header" }, [avatarCard, welcomeContainer]);
            setStyleForElement(subHeader, {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "40px",
                padding: "40px",
            });
            insertElementToDOM(mainContainer, subHeader);
            menuSections.map((section) => {
                const title = createElement("p", { style: "color: white; font-size: 26px; font-weight: bold; margin: 0; margin-bottom: 10px" }, section.sectionName);
                const gridMenu = section.gridList.map((item) => {
                    const card = createElement("div", { class: "std_card" }, [
                        createElement("div", { class: "std_card_thumbnail" }, createElement("img", { src: item.thumbnail, width: "100%" })),
                        createElement("div", { class: "std_card_title" }, createElement("p", { style: "margin:0" }, item.name)),
                    ]);
                    return createElement("div", { class: "std_grid_item" }, createElement("a", { class: "std_menu_card-link", href: item.link }, card));
                });
                const gridMenuSection = createElement("div", { class: "std-grid-menu" }, gridMenu);
                const sectionElement = createElement("div", { style: "margin-bottom: 40px; padding: 0 40px" }, [title, gridMenuSection]);
                insertElementToDOM(mainContainer, sectionElement);
            });
        });
    };

    (function installWrapper() {
        const body = document.querySelector("body");
        if (!body) return;
        prependElementToDOM(body, createElement("div", { id: "std-main-wrapper" }, null));
    })();

    const UI = {
        getMainContainer: function () {
            return document.querySelector("div#std-content-container");
        },
        resetDefaultHeader: function () {
            installHeader();
            const defaultHeader = document.querySelector("div#header-topbar-option-demo.page-header-topbar");
            if (!defaultHeader) return;
            defaultHeader.style.visibility = "hidden";
        },
        resetDefaultWrapper: function () {
            const wrapper = document.querySelector("div#wrapper");
            const right_back_version = document.querySelector("div#right_back_version");
            if (!wrapper) return;
            wrapper.style.display = "none";
            right_back_version ? (right_back_version.style.display = "none") : undefined;
        },
        installBackground: function () {
            const mainWrapper = document.querySelector("div#std-main-wrapper");
            if (!mainWrapper) return;
            isAccessibleInstallElement({ tagName: "div", id: "std-background" }, function (err, backgroundElement) {
                if (err) return;
                const bgURL = backgroundImageRandom();
                setStyleForElement(backgroundElement, { background: `url(${bgURL})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" });
                insertElementToDOM(mainWrapper, backgroundElement);
            });
        },
        installContainer: function () {
            const mainWrapper = document.querySelector("div#std-main-wrapper");
            if (!mainWrapper) return;
            isAccessibleInstallElement({ tagName: "div", id: "std-content-container" }, function (err, containerElement) {
                if (err) return;
                insertElementToDOM(mainWrapper, containerElement);
            });
        },
        resetAll: function () {
            UI.resetDefaultHeader();
            UI.resetDefaultWrapper();
        },
    };

    chrome.runtime.onMessage.addListener(function (backgroundSender, b, sendResponseToBackground) {
        backgroundSender.message ? sendResponseToBackground(true) : undefined;
        backgroundSender.message == "install_main" ? installMainPage() : undefined;
        backgroundSender.message == "install_header" ? UI.resetDefaultHeader() : undefined;
    });
})();
