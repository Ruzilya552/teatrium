"use strict";function setCookie(e,o,t){var i="";if(t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3),i="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+i+"; path=/"}function getCookie(e){for(var o=e+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var n=t[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}$(document).ready(function(){var e=getCookie("approve");e||$("body").addClass("cookie"),$(".js-approve-cookie").on("click",function(){$("body").removeClass("cookie"),setCookie("approve","Y",365)}),$(".js-reject-cookie").on("click",function(){$("body").removeClass("cookie")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxzL2Nvb2tpZS5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJkYXlzIiwiZXhwaXJlcyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImRvY3VtZW50IiwiY29va2llIiwiZ2V0Q29va2llIiwibmFtZUVRIiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImVyYXNlQ29va2llIiwiJCIsInJlYWR5IiwiYXBwcm92ZSIsImFkZENsYXNzIiwib24iLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQSxTQUFTQSxXQUFVQyxFQUFNQyxFQUFPQyxHQUM5QixHQUFJQyxHQUFVLEVBRWQsSUFBSUQsRUFBTSxDQUNSLEdBQUlFLEdBQU8sR0FBSUMsS0FDZkQsR0FBS0UsUUFBUUYsRUFBS0csVUFBbUIsR0FBUEwsRUFBWSxHQUFLLEdBQUssS0FDcERDLEVBQVUsYUFBZUMsRUFBS0ksY0FHaENDLFNBQVNDLE9BQVNWLEVBQU8sS0FBT0MsR0FBUyxJQUFNRSxFQUFVLFdBRzNELFFBQVNRLFdBQVVYLEdBSWpCLElBQUssR0FIRFksR0FBU1osRUFBTyxJQUNoQmEsRUFBS0osU0FBU0MsT0FBT0ksTUFBTSxLQUV0QkMsRUFBSSxFQUFHQSxFQUFJRixFQUFHRyxPQUFRRCxJQUFLLENBR2xDLElBRkEsR0FBSUUsR0FBSUosRUFBR0UsR0FFVyxLQUFmRSxFQUFFQyxPQUFPLElBQ2RELEVBQUlBLEVBQUVFLFVBQVUsRUFBR0YsRUFBRUQsT0FHdkIsSUFBeUIsR0FBckJDLEVBQUVHLFFBQVFSLEdBQ1osTUFBT0ssR0FBRUUsVUFBVVAsRUFBT0ksT0FBUUMsRUFBRUQsUUFJeEMsTUFBTyxNQUdULFFBQVNLLGFBQVlyQixHQUNuQlMsU0FBU0MsT0FBU1YsRUFBTyxvREFHM0JzQixFQUFFYixVQUFVYyxNQUFNLFdBQ2hCLEdBQUlDLEdBQVViLFVBQVUsVUFFbkJhLElBQ0hGLEVBQUUsUUFBUUcsU0FBUyxVQUdyQkgsRUFBRSxzQkFBc0JJLEdBQUcsUUFBUyxXQUNsQ0osRUFBRSxRQUFRSyxZQUFZLFVBQ3RCNUIsVUFBVSxVQUFXLElBQUssT0FFNUJ1QixFQUFFLHFCQUFxQkksR0FBRyxRQUFTLFdBQ2pDSixFQUFFLFFBQVFLLFlBQVkiLCJmaWxlIjoicGFydGlhbHMvY29va2llLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xuICB2YXIgZXhwaXJlcyA9ICcnO1xuXG4gIGlmIChkYXlzKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBleHBpcmVzID0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArICh2YWx1ZSB8fCAnJykgKyBleHBpcmVzICsgJzsgcGF0aD0vJztcbn1cblxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcbiAgdmFyIG5hbWVFUSA9IG5hbWUgKyAnPSc7XG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYyA9IGNhW2ldO1xuXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZXJhc2VDb29raWUobmFtZSkge1xuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHZhciBhcHByb3ZlID0gZ2V0Q29va2llKCdhcHByb3ZlJyk7XG5cbiAgaWYgKCFhcHByb3ZlKSB7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdjb29raWUnKTtcbiAgfVxuXG4gICQoJy5qcy1hcHByb3ZlLWNvb2tpZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2Nvb2tpZScpO1xuICAgIHNldENvb2tpZSgnYXBwcm92ZScsICdZJywgMzY1KTtcbiAgfSk7XG4gICQoJy5qcy1yZWplY3QtY29va2llJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnY29va2llJyk7IC8vc2V0Q29va2llKCdhcHByb3ZlJywgJ04nKTtcbiAgfSk7XG59KTsiXX0=
