(this["webpackJsonpreact-spa-great-quotes"]=this["webpackJsonpreact-spa-great-quotes"]||[]).push([[4],{45:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__30ohc"}},46:function(e,t,c){e.exports={comments:"Comments_comments__16p7k"}},47:function(e,t,c){e.exports={form:"NewCommentForm_form__Ad42P",loading:"NewCommentForm_loading__lDhl8",control:"NewCommentForm_control__3tj3C",actions:"NewCommentForm_actions__1sS_S"}},48:function(e,t,c){e.exports={item:"CommentItem_item__3M0FS"}},49:function(e,t,c){e.exports={comments:"CommentsList_comments__1mli3"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(10),a=c(36),r=c(37),m=c(45),j=c.n(m),i=c(1),u=function(e){return Object(i.jsxs)("figure",{className:j.a.quote,children:[Object(i.jsxs)("p",{children:['"',e.text,'"']}),Object(i.jsxs)("figcaption",{children:["- ",e.author]})]})},d=c(38),l=c(46),b=c.n(l),x=c(14),O=c(47),h=c.n(O),f=function(e){var t=Object(n.useRef)(),c=Object(a.a)(r.a),s=c.sendRequest,o=c.status,m=c.error,j=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||m||j()}),[o,m,j]);var u=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(i.jsxs)("form",{className:h.a.form,onSubmit:u,children:["pending"===o&&Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(x.a,{})}),Object(i.jsxs)("div",{className:h.a.control,onSubmit:u,children:[Object(i.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(i.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(i.jsx)("div",{className:h.a.actions,children:Object(i.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(48),_=c.n(p),N=function(e){return Object(i.jsx)("li",{className:_.a.item,children:Object(i.jsx)("p",{children:e.text})})},C=c(49),q=c.n(C),v=function(e){return Object(i.jsx)("ul",{className:q.a.comments,children:e.comments.map((function(e){return Object(i.jsx)(N,{text:e.text},e.id)}))})},g=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],o=t[1],m=Object(s.useParams)(),j=m.quoteId,u=Object(a.a)(r.c),l=u.sendRequest,O=u.status,h=u.data;Object(n.useEffect)((function(){l(j)}),[j,l]);var p,_=Object(n.useCallback)((function(){l(j)}),[l,j]);return"pending"===O&&(p=Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(x.a,{})})),"completed"===O&&h&&h.length>0&&(p=Object(i.jsx)(v,{comments:h})),"completed"!==O||h&&0!==h.length||(p=Object(i.jsx)("p",{className:"centered",children:"No comments yet"})),Object(i.jsxs)("section",{className:b.a.comments,children:[Object(i.jsx)("h2",{children:"User Comments"}),!c&&Object(i.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(i.jsx)(f,{quoteId:m.quoteId,onAddedComment:_}),p]})};t.default=function(){var e=Object(s.useParams)(),t=Object(s.useRouteMatch)(),c=e.quoteId,m=Object(a.a)(r.e,!0),j=m.sendRequest,d=m.status,l=m.data,b=m.error;return Object(n.useEffect)((function(){j(c)}),[j,c]),l?"pending"===d?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(x.a,{})}):b?Object(i.jsx)("p",{className:"centered",children:b}):l.text?Object(i.jsxs)("section",{children:[Object(i.jsx)(u,{text:l.text,author:l.author}),Object(i.jsx)(s.Route,{path:t.path,exact:!0,children:Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(o.a,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comment"})})}),Object(i.jsx)(s.Route,{path:"".concat(t.path,"/comments"),exact:!0,children:Object(i.jsx)(g,{})})]}):Object(i.jsx)("p",{children:"No quote found !"}):Object(i.jsx)("p",{children:"No quotes found..."})}}}]);
//# sourceMappingURL=4.4c2eedcb.chunk.js.map