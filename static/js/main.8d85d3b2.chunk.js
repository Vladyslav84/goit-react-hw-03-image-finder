(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGallary:"ImageGallery_imageGallary__IENDE",imageGalleryItem:"ImageGallery_imageGalleryItem__T0n4z",ImageGalleryItemimage:"ImageGallery_ImageGalleryItemimage__2aSUM"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__1mXNS",modal:"Modal_modal__3q8u2"}},22:function(e,t,a){e.exports={container:"Container_container__AZJxE"}},24:function(e,t,a){e.exports={button:"Button_button__2RDo2"}},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=a(13),l=a(4),s=a(5),u=a(7),m=a(6),h=a(22),d=a.n(h),g=a(2),p=a.n(g),b=a(0),j=function(e){var t=e.children;return Object(b.jsx)("div",{className:d.a.container,children:t})};j.prototype={children:p.a.object.isRequired};var y=j,f=a(8),O=a.n(f),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.resetinputValue()},e.resetinputValue=function(){e.setState({inputValue:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:O.a.Searchbar,children:Object(b.jsxs)("form",{className:O.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(b.jsx)("span",{className:O.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:O.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})]})})}}]),a}(n.Component),_=a(23),v=a.n(_),x=a(10),N=a.n(x);function I(e){var t=e.imgArr,a=(e.children,e.onSelect);return Object(b.jsx)("ul",{className:N.a.imageGallary,children:t.map((function(e){return Object(b.jsx)("li",{className:N.a.imageGalleryItem,onClick:function(){return a(e)},children:Object(b.jsx)("img",{src:e.webformatURL,alt:e.tags,className:N.a.ImageGalleryItemimage})},e.id)}))})}I.prototype={imgArr:p.a.arrayOf(p.a.object).isRequired};var B=I,k=a(24),C=a.n(k),w=function(e){var t=e.onLoadMore;return Object(b.jsx)("button",{onClick:function(){return t()},type:"button",className:C.a.button,children:"Load more"})};w.prototype={onLoadMore:p.a.func.isRequired};var F=w,G=a(12),M=a.n(G),E=document.querySelector("#modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyEsc=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:M.a.overlay,onClick:this.handleOverlayClick,children:Object(b.jsx)("div",{className:M.a.modal,children:this.props.children})}),E)}}]),a}(n.Component),A=a(25),V=a.n(A),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgGallery:[],imgName:"",pageNum:1,perPage:12,PIXABAY_KEY:"21694115-487a2c793b7208539d5182bab",selectedObg:null,status:"idle",error:null},e.searchBarInputValueHandler=function(t){""!==t.trim()&&e.setState({imgName:t}),e.state.imgName!==t&&e.setState({imgGallery:[],pageNum:1})},e.loadMoreBtnHandler=function(){e.setState((function(e){return{pageNum:e.pageNum+=1}}))},e.handleSelectObg=function(t){e.setState({selectedObg:t,status:"pending"})},e.toggleMdl=function(t){e.setState((function(e){e.selectedObg;return{selectedObg:null}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;(""!==this.state.imgName.trim()&&this.state.imgName!==t.imgName||this.state.pageNum!==t.pageNum)&&(this.setState({status:"pending"}),v.a.get("https://pixabay.com/api/?key=".concat(this.state.PIXABAY_KEY,"&q=").concat(this.state.imgName,"&image_type=photo&page=").concat(this.state.pageNum,"&per_page=").concat(this.state.perPage,"&image_type=photo&orientation=horizontal&")).then((function(e){return e.data.hits})).then((function(e){return a.setState((function(t){return{imgGallery:[].concat(Object(i.a)(t.imgGallery),Object(i.a)(e)),status:"resolved"}}))})).catch((function(e){return a.setState({error:"error",status:"rejected"})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(b.jsxs)(y,{children:[Object(b.jsx)(S,{onSubmit:this.searchBarInputValueHandler}),Object(b.jsx)(B,{imgArr:this.state.imgGallery,onSelect:this.handleSelectObg}),""!==this.state.imgName&&Object(b.jsx)(F,{onLoadMore:this.loadMoreBtnHandler}),this.state.selectedObg&&Object(b.jsxs)(L,{onClose:this.toggleMdl,children:[Object(b.jsx)("img",{src:this.state.selectedObg.largeImageURL,alt:this.state.selectedObg.largeImageURL}),Object(b.jsx)("button",{type:"button",onClick:this.toggleMdl,children:"Close"})]}),"pending"===this.state.status&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V.a,{type:"TailSpin",color:"#00BFFF",height:300,width:300}),"Loading..."]})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3kSYV",SearchForm:"SearchBar_SearchForm__2r0NJ",SearchFormButton:"SearchBar_SearchFormButton__mU03s",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__-crRy",SearchFormInput:"SearchBar_SearchFormInput__3dm4o"}}},[[69,1,2]]]);
//# sourceMappingURL=main.8d85d3b2.chunk.js.map