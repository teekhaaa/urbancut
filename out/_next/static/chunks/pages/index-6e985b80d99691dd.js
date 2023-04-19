(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(2738)}])},2738:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return pages}});var jsx_runtime=__webpack_require__(5893),dom_motion=__webpack_require__(7910),react=__webpack_require__(7294);let styles_styles={innerWidth:"2xl:max-w-[1580px] w-full",interWidth:"lg:w-[80%] w-[100%]",paddings:"sm:p-16 xs:p-8 px-6 py-12",yPaddings:"sm:py-32 xs:py-8 py-32",xPaddings:"sm:px-16 px-6",topPaddings:"sm:pt-16 xs:pt-8 pt-12",bottomPaddings:"sm:pb-16 xs:pb-8 pb-12",flexCenter:"flex justify-center items-center",flexStart:"flex justify-start items-start",flexEnd:"flex justify-end",navPadding:"pt-[98px]",boxWidth:"xl:max-w-[1280px] w-full",heading2:"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",paragraph:"font-poppins font-normal text-White text-[18px] leading-[30.8px]",flexCenter:"flex justify-center items-center",flexStart:"flex justify-center items-start",paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-12 py-4",marginX:"sm:mx-16 mx-6",marginY:"sm:my-16 my-6",heroHeading:"font-bold lg:text-[68px] md:text-[68px] sm:text-[70px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-white",heroDText:"md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"};styles_styles.paddingY,styles_styles.paddingY,styles_styles.flexCenter,styles_styles.flexCenter,styles_styles.flexStart;let navVariants={hidden:{opacity:0,y:-50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:1}}},motion_staggerContainer=(staggerChildren,delayChildren)=>({hidden:{},show:{transition:{staggerChildren,delayChildren}}}),textContainer={hidden:{opacity:0},show:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.1,delayChildren:.1*i}}}},textVariant2={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"tween",ease:"easeIn"}}},motion_fadeIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?100:"right"===direction?-100:0,y:"up"===direction?100:"down"===direction?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type,delay,duration,ease:"easeOut"}}}),motion_planetVariants=direction=>({hidden:{x:"left"===direction?"-100%":"100%",rotate:120},show:{x:0,rotate:0,transition:{type:"spring",duration:1.8,delay:.5}}}),footerVariants={hidden:{opacity:0,y:50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:.5}}},Navbar=()=>{let[isDrawerOpen,setIsDrawerOpen]=(0,react.useState)(!1),toggleDrawer=()=>setIsDrawerOpen(!isDrawerOpen);return(0,jsx_runtime.jsxs)(dom_motion.E.nav,{variants:navVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_styles.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-[50%] inset-0 gradient-01 gradient-01"}),(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_styles.innerWidth," mx-auto flex justify-between gap-8"),children:[(0,jsx_runtime.jsx)("img",{className:"h-[200px] m-[-60px] leading-[30px] object-contain",src:"./logo.png",alt:"Logo"}),(0,jsx_runtime.jsx)("img",{src:"/menu.svg",onClick:toggleDrawer,alt:"menu",className:"w-[28px] h-[28px] object-contain lg:hidden justify-center items-center cursor-pointer self-center"}),(0,jsx_runtime.jsxs)("ul",{className:"flex text-white gap-7 justify-center items-center sm:hidden md:hidden lg:flex",children:[(0,jsx_runtime.jsx)("li",{className:"hover:text-[#00FFFF] text-white",children:(0,jsx_runtime.jsx)("a",{href:"#home",children:"Home"})}),(0,jsx_runtime.jsx)("li",{className:"hover:text-[#00FFFF] text-white",children:(0,jsx_runtime.jsx)("a",{href:"#services",children:"Services"})}),(0,jsx_runtime.jsx)("li",{className:"hover:text-[#00FFFF] text-white",children:(0,jsx_runtime.jsx)("a",{href:"#about",children:"About"})}),(0,jsx_runtime.jsx)("li",{className:"p-[10px] bg-[#063970] border-solid border-2 px-[20px] border-white rounded-xl",children:(0,jsx_runtime.jsx)("a",{href:"#contact",children:" Contact"})})]})]}),isDrawerOpen&&(0,jsx_runtime.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-full h-full bg-black opacity-25",onClick:toggleDrawer}),(0,jsx_runtime.jsxs)("div",{className:"bg-white z-10 p-8 rounded-lg",children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,jsx_runtime.jsx)("h2",{className:"font-bold text-2xl",children:"TheUrbanCutStudio"}),(0,jsx_runtime.jsx)("div",{onClick:toggleDrawer,children:(0,jsx_runtime.jsx)("img",{src:"/close.svg",alt:"Close",className:"w-6 h-6"})})]}),(0,jsx_runtime.jsxs)("ul",{className:"flex flex-col gap-4 text-white font-semibold",children:[(0,jsx_runtime.jsx)("li",{className:"hover:text-[#00FFFF] text-black",children:(0,jsx_runtime.jsx)("a",{href:"#home",children:"Home"})}),(0,jsx_runtime.jsx)("li",{className:"hover:text-[#00FFFF] text-black",children:(0,jsx_runtime.jsx)("a",{href:"#services",children:"Services"})}),(0,jsx_runtime.jsx)("li",{className:"hover:text-[#00FFFF] text-black",children:(0,jsx_runtime.jsx)("a",{href:"#about",children:"About"})}),(0,jsx_runtime.jsx)("li",{className:"p-[10px] bg-[#063970] border-solid border-2 px-[20px] border-white rounded-xl",children:(0,jsx_runtime.jsx)("a",{href:"#contact",children:" Contact"})})]})]})]})]})},CustomTexts_TypingText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(dom_motion.E.p,{variants:textContainer,className:"font-normal text-[14px] text-secondary-white ".concat(textStyles),children:Array.from(title).map((letter,index)=>(0,jsx_runtime.jsx)(dom_motion.E.span,{variants:textVariant2,children:" "===letter?"\xa0":letter},index))})},CustomTexts_TitleText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(dom_motion.E.h2,{variants:textVariant2,initial:"hidden",whileInView:"show",className:"".concat(textStyles," mt-[8px] font-bold md:text-[64px] text-[40px] text-white"),children:title})},FeedbackCard=param=>{let{content,name,title,img}=param;return(0,jsx_runtime.jsxs)("div",{className:"flex justify-between hover:bg-black flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",children:[(0,jsx_runtime.jsx)("img",{src:"./quotes.svg",alt:"double_quotes",className:"w-[42.6px] h-[27.6px] object-contain"}),(0,jsx_runtime.jsx)("p",{className:"font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10",children:content}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-row ",children:[(0,jsx_runtime.jsx)("img",{src:img,alt:name,className:"w-[48px] h-[48px] rounded-full"}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col ml-4",children:[(0,jsx_runtime.jsx)("h4",{className:"font-poppins font-semibold text-[20px] leading-[32px] text-white",children:name}),(0,jsx_runtime.jsx)("p",{className:"font-poppins font-normal text-[16px] leading-[24px] text-white",children:title})]})]})]})},feedback=[{id:"feedback-1",content:"I've been using this agency for all of my marketing and design needs for the past year, and they never disappoint. Their team is highly skilled and always delivers top-quality work. From video editing to web development, they truly offer complete solutions for any business's digital needs.",name:"Prashant Dhavan",img:"./people01.jpg"},{id:"feedback-2",content:"If you're looking for a reliable agency that can handle all of your digital needs, then look no further. This agency provides top-notch services in video editing, web development, digital marketing, and graphic design. Their team is highly skilled and always delivers high-quality work on time and on budget. I would highly recommend them to anyone.",name:"Steve Mark",img:"people02.png"},{id:"feedback-3",content:"This agency is a one-stop-shop for all things digital. Their team is highly skilled and always goes above and beyond to ensure that their clients are satisfied. They provide excellent services in video editing, web development, and graphic design. I highly recommend them to anyone looking for reliable and professional digital solutions.",name:"Shashwant",img:"./people03.jpg"}],socials=[{name:"linkedin",url:"/linkedin.svg",link:"https://www.linkedin.com/company/the-urban-cut-studios1/"},{name:"instagram",url:"/instagram.svg",link:"https://instagram.com/theurbancutstudiosofficial"},{name:"facebook",url:"/facebook.svg",link:"https://www.facebook.com/profile.php?id=100091894932866"}],Footer=()=>(0,jsx_runtime.jsxs)(dom_motion.E.footer,{variants:footerVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_styles.paddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"footer-gradient"}),(0,jsx_runtime.jsx)("div",{className:"".concat(styles_styles.innerWidth," mx-auto flex flex-col gap-8"),children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:"md-[50px] h-[2px] bg-white opacity-10"}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[(0,jsx_runtime.jsx)("h4",{className:"font-extrabold text-[24px] text-white",children:"THE URBAN CUT STUDIO"}),(0,jsx_runtime.jsx)("p",{className:"font-normal text-[14px] text-white opacity-50",children:"Copyright \xa9 2023 TheUrbanCutStudio. All rights reserved."}),(0,jsx_runtime.jsx)("div",{className:"flex gap-4",children:socials.map(social=>(0,jsx_runtime.jsx)("a",{href:social.link,"aria-label":"social-link",children:(0,jsx_runtime.jsx)("img",{src:social.url,className:"w-[24px] h-[24px] object-contain cursor-pointer"},social.name)}))})]})]})})]}),Hero=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_styles.yPaddings," sm:pl-16 pl-6 min-h-full py-20"),id:"home",children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"{$styles.innerwidth} mx-auto lg:flex-row flex flex-col gap-8",children:[(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("left","tween",.2,1),className:"flex-[0.75] flex justify-center flex-col",children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"| Let's Begin"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Transform Your Business with Our Comprehensive Services"})})]}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:motion_planetVariants("right"),className:"flex-1 ".concat(styles_styles.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"./SOCIAL.png",alt:"Ad",className:"w-[100%] h-[100%] object-contain"})})]})}),About=()=>(0,jsx_runtime.jsxs)("section",{className:"".concat(styles_styles.paddings," relative z-10 min-h-[100vh] items-center justify center"),children:[(0,jsx_runtime.jsx)("div",{className:"gardient-02 z-0"}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_styles.innerWidth," mx-auto ").concat(styles_styles.flexCenter," flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"| About Us",textstyles:"text-center"}),(0,jsx_runtime.jsx)(dom_motion.E.p,{variants:motion_fadeIn("up","tween",.2,1),className:"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",children:"Welcome to Urban Studio, We are a smma agency that specializes in helping businesses grow their online presence. Our team of experts provides a range of services including website design, social media management, video editing , content creation and many more. We take a data-driven approach to every project, ensuring our clients achieve measurable results. Contact us today to learn more about how we can help your business succeed online."}),(0,jsx_runtime.jsx)(dom_motion.E.img,{variants:motion_fadeIn("up","tween",.3,1),src:"/arrow-down.svg",className:"w-[18px] h-[28px] object-contain mt-[28px]"})]})]}),Explore=()=>{let[active,setActive]=(0,react.useState)("world-2");return(0,jsx_runtime.jsx)("section",{className:"".concat(styles_styles.paddings),id:"services",children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_styles.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"| Our Services",textStyles:"text-center"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Unlock Your Potential with Our ",(0,jsx_runtime.jsx)("br",{className:"md:block hidden"}),"Professional Services"]}),textStyles:"text-center"}),(0,jsx_runtime.jsxs)("div",{className:"mt-[50px] flex min-h-[70vh] gap-5 w-[100%] ".concat(styles_styles.innerWidth," mx-auto flex-wrap"),children:[(0,jsx_runtime.jsxs)("div",{className:"min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px] bg-white flex justify-center items-center flex-col relative rounded-xl",children:[(0,jsx_runtime.jsx)("img",{src:"/vector1.png",className:"h-[400px]",alt:""}),(0,jsx_runtime.jsx)("h3",{className:"font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8",children:"Graphic Designing"}),(0,jsx_runtime.jsx)("p",{children:"Our graphic designing services enhance your brand's visual identity, boosting your social presence."})]}),(0,jsx_runtime.jsxs)("div",{className:"min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px] bg-white flex justify-center items-center flex-col relative rounded-xl",children:[(0,jsx_runtime.jsx)("img",{src:"/YOUTUBE.png",className:"h-[400px]",alt:""}),(0,jsx_runtime.jsx)("h3",{className:"font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8",children:"Video Editing"}),(0,jsx_runtime.jsx)("p",{children:"Our video editing services can boost your social media presence by creating engaging and professional content that stands out to your audience."})]}),(0,jsx_runtime.jsxs)("div",{className:"min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px] bg-white flex justify-center items-center flex-col relative rounded-xl",children:[(0,jsx_runtime.jsx)("img",{src:"./vector2.png",className:"h-[400px]",alt:""}),(0,jsx_runtime.jsx)("h3",{className:"font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8",children:"360 degree youtube management"}),(0,jsx_runtime.jsx)("p",{children:"With our YouTube management services, we can help you optimize your channel, create engaging content, and reach a wider audience. By doing so, we can boost your social presence and increase your visibility on the platform."})]}),(0,jsx_runtime.jsxs)("div",{className:"min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px] bg-white flex justify-center items-center flex-col relative rounded-xl",children:[(0,jsx_runtime.jsx)("img",{src:"/vector4.png",className:"h-[400px]",alt:""}),(0,jsx_runtime.jsx)("h3",{className:"font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8",children:"Social Media Management"}),(0,jsx_runtime.jsx)("p",{children:"Unleash Your Social Media Power: Elevate Your Online Presence, Build Loyal Connections, and Amplify Engagement!"})]}),(0,jsx_runtime.jsxs)("div",{className:"min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px] bg-white flex justify-center items-center flex-col relative rounded-xl",children:[(0,jsx_runtime.jsx)("img",{src:"/vector3.png",className:"h-[400px]",alt:""}),(0,jsx_runtime.jsx)("h3",{className:"font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8",children:"Web Development"}),(0,jsx_runtime.jsx)("p",{children:"Empower your online presence with our expert web development services and elevate your brand to new heights"})]}),(0,jsx_runtime.jsxs)("div",{className:"min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px] bg-white flex justify-center items-center flex-col relative rounded-xl",children:[(0,jsx_runtime.jsx)("img",{src:"/vector2.png",className:"h-[400px]",alt:""}),(0,jsx_runtime.jsx)("h3",{className:"font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8",children:"Digital Marketing"}),(0,jsx_runtime.jsx)("p",{children:"Our digital marketing services employ proven strategies to increase your brand's visibility and engagement on social media platforms. This, in turn, will boost your social presence and grow your audience."})]})]})]})})},GetStarted=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_styles.paddings," relative z-10"),id:"contact",children:(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"{$styles.innerwidth} mx-auto flex-col flex gap-8 justify-center items-center",children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_planetVariants("left"),className:"flex-1 ".concat(styles_styles.flexCenter," flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"| Contact Us"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"We reply in few hours"})}),(0,jsx_runtime.jsxs)("div",{className:"mt-[31px] flex flex-col gap-[24px] lg:flex-row md:flex-row",children:[(0,jsx_runtime.jsxs)("div",{className:"flex bg-white justify-between item-center p-[50px] flex-col text-black rounded-xl",children:[(0,jsx_runtime.jsx)("h3",{className:"font-semibold text-[20px] text-black mb-[30px]",children:"Mobile:"}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{src:"./phone.svg",alt:"",className:"h-[48px] mr-[20px]"})}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)("a",{href:"tel:+919425115731",children:"+91 94251 15731"}),(0,jsx_runtime.jsx)("a",{href:"tel:+916267750621",children:"+91 62677 50621"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex bg-white justify-between item-center p-[50px] flex-col text-black rounded-xl",children:[(0,jsx_runtime.jsx)("h3",{className:"font-semibold text-[20px] text-black mb-[30px]",children:"Email:"}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{src:"./email.svg",alt:"",className:"h-[48px] mr-[20px]"})}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col",children:(0,jsx_runtime.jsx)("a",{href:"mailto:theurbancutstudioofficial@gmail.com",children:"theurbancutstudioofficial@gmail.com"})})]})]})]})]})})}),World=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_styles.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"{$styles.innerwidth} mx-auto flex flex-col",children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"| What we are?",textStyles:"text-center"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["We are ",(0,jsx_runtime.jsx)("span",{className:"text-[#00FFFF]",children:"TheUrbanCutStudio"})]}),textStyles:"text-center"}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:motion_fadeIn("up","tween",.3,1),className:"relative mt-[68px] flex w-full h-[550px]",children:(0,jsx_runtime.jsx)("p",{className:"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",children:"We are a one-stop agency providing comprehensive solutions to all your digital needs. From video editing and graphic designing to 360-degree YouTube management and web development, we have got you covered. Our team of experts is dedicated to delivering top-notch services that cater to your specific requirements. Whether you are a small business owner or a large corporation, we have the expertise to help you achieve your goals and succeed in the digital world. So, if you are looking for reliable and efficient digital solutions, look no further than our agency."})})]})}),Insights=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_styles.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_styles.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"| Work ",textStyles:"text-center"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Our Expertise"}),textStyles:"text-center"}),(0,jsx_runtime.jsx)("div",{className:"".concat(styles_styles.yPaddings," flex"),children:(0,jsx_runtime.jsxs)("ul",{className:"flex gap-10 flex-wrap",children:[(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Graphic Designing"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Wedding Invites"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"LogoDesign"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"V.F.X."}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"2D Animation"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"3D Animation"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"3D Models"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Composition"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Package Design"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Video Editing"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Digital Marketing"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Socail Media Marketing"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"UI/UX Design"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Video Animation"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"Wedding Video Editing"}),(0,jsx_runtime.jsx)("li",{className:"text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl",children:"App Development"})]})})]})}),Testimonials=()=>(0,jsx_runtime.jsxs)("section",{id:"clients",className:"".concat(styles_styles.yPadding," ").concat(styles_styles.flexCenter," flex-col flex relative min-h-[100vh] mt-[300px]"),children:[(0,jsx_runtime.jsx)("div",{className:"absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"}),(0,jsx_runtime.jsxs)("div",{className:"w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ml-[200px]",children:[(0,jsx_runtime.jsxs)("h2",{className:styles_styles.heading2,children:["What People are ",(0,jsx_runtime.jsx)("br",{className:"sm:block hidden"})," saying about us"]}),(0,jsx_runtime.jsx)("div",{className:"w-full md:mt-0 mt-6",children:(0,jsx_runtime.jsx)("p",{className:"".concat(styles_styles.paragraph," text-left max-w-[450px] text-white")})})]}),(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ml-[200px]",children:feedback.map(card=>(0,jsx_runtime.jsx)(FeedbackCard,{...card},card.id))})]}),Page=()=>(0,jsx_runtime.jsxs)("div",{className:"bg-primary-black overflow-hidden",children:[(0,jsx_runtime.jsx)(Navbar,{}),(0,jsx_runtime.jsx)(Hero,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(World,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-03 z-0"}),(0,jsx_runtime.jsx)(Explore,{})]}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(About,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(Insights,{})]}),(0,jsx_runtime.jsx)("div",{className:"relative",children:(0,jsx_runtime.jsx)(Testimonials,{})}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(GetStarted,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(Footer,{})]})]});var pages=Page}},function(__webpack_require__){__webpack_require__.O(0,[910,774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);