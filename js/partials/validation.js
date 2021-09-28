"use strict";!function(){function a(a){return Boolean(a.data("button-dis"))}function t(t,e){var r=t.find('button[type="submit"]');a(t)&&(r.prop("disabled",e),r.toggleClass("disabled",e))}$.extend($.validator.messages,{required:"Это поле необходимо заполнить.",name:"Укажите имя",phone:"Укажите телефон",remote:"Пожалуйста, введите правильное значение.",email:"Укажите электронный адрес",url:"Пожалуйста, введите корректный URL.",date:"Пожалуйста, введите корректную дату.",dateISO:"Пожалуйста, введите корректную дату в формате ISO.",number:"Пожалуйста, введите число.",digits:"Пожалуйста, вводите только цифры.",creditcard:"Пожалуйста, введите правильный номер кредитной карты.",equalTo:"Пожалуйста, введите такое же значение ещё раз.",extension:"Пожалуйста, выберите файл с правильным расширением.",maxlength:$.validator.format("Пожалуйста, введите не больше {0} символов."),minlength:$.validator.format("Пожалуйста, введите не меньше {0} символов."),rangelength:$.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),range:$.validator.format("Пожалуйста, введите число от {0} до {1}."),max:$.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),min:$.validator.format("Пожалуйста, введите число, большее или равное {0}."),age:"К сожалению, Вы не можете войти, так как не достигли минимального возраста для легальной покупки и употребления алкоголя",defage:"Неверный формат данных",city:"Укажите город",textarea:"Введите сообщение"}),$.validator.addMethod("text-name",function(a,t){return Boolean(a)},$.validator.messages.name),$.validator.addMethod("text-city",function(a,t){return Boolean(a)},$.validator.messages.city),$.validator.addMethod("textarea",function(a,t){return Boolean(a.length)},$.validator.messages.textarea),$.validator.addMethod("tel",function(a,t){var e=/^(\+7|7|8)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;return e.test(a)},$.validator.messages.phone),$.validator.addMethod("email",function(a,t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(a)},$.validator.messages.email),$.validator.addMethod("date",function(a,t){var e=Date.parse("1900-01-01"),r=Date.parse("2100-01-01"),d=Date.parse(a);return!(d<e||d>r)&&!/Invalid|NaN/.test(new Date(e))},$.validator.messages.age),$.validator.addMethod("js-select-form",function(a,t){return Boolean(a)},"Не выбрано."),jQuery.validator.addClassRules({"js-name":{"text-name":!0},"js-tel":{tel:!0},"js-email":{email:!0}}),$(".js-form-validate").each(function(){var e,r=$(this);e=$(this).validate({ignore:".ignore, :hidden",submitHandler:function(a){var d=void 0===r.data("valid-clear")||"true"===r.data("valid-clear"),o=void 0===r.data("data-button-blocked")||"true"===r.data("data-button-blocked");return o&&(r.find('button[type="submit"]').addClass("disabled"),r.find('button[type="submit"]').prop("disabled",!0)),$(a).trigger("ajax.send"),d&&setTimeout(function(){$(".js-filename").trigger("file.clear"),$(".js-select-form").trigger("select2.clear"),a.reset(),e.resetForm()},100),t(r,!0),!1}}),a(r)&&(t(r,!0),$(this).on("blur keyup change","input, select",function(a){var d=!e.checkForm();t(r,d)}))})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiaXNCdXR0b25EaXNhYmxlZCIsIiRmb3JtIiwiQm9vbGVhbiIsImRhdGEiLCJzZXRCdXR0b25EaXNhYmxlZCIsIl9ib29sZWFuIiwiJHN1YiIsImZpbmQiLCJwcm9wIiwidG9nZ2xlQ2xhc3MiLCIkIiwiZXh0ZW5kIiwidmFsaWRhdG9yIiwibWVzc2FnZXMiLCJyZXF1aXJlZCIsIm5hbWUiLCJwaG9uZSIsInJlbW90ZSIsImVtYWlsIiwidXJsIiwiZGF0ZSIsImRhdGVJU08iLCJudW1iZXIiLCJkaWdpdHMiLCJjcmVkaXRjYXJkIiwiZXF1YWxUbyIsImV4dGVuc2lvbiIsIm1heGxlbmd0aCIsImZvcm1hdCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJtYXgiLCJtaW4iLCJhZ2UiLCJkZWZhZ2UiLCJjaXR5IiwidGV4dGFyZWEiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsImVsZW1lbnQiLCJsZW5ndGgiLCJyZWdQaG9uZSIsInRlc3QiLCJyZWdFbWFpbCIsIm1pbkRhdGUiLCJEYXRlIiwicGFyc2UiLCJtYXhEYXRlIiwidmFsdWVFbnRlcmVkIiwialF1ZXJ5IiwiYWRkQ2xhc3NSdWxlcyIsImpzLW5hbWUiLCJ0ZXh0LW5hbWUiLCJqcy10ZWwiLCJ0ZWwiLCJqcy1lbWFpbCIsImVhY2giLCJ0aGlzIiwidmFsaWRhdGUiLCJpZ25vcmUiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybSIsImlzVmFsaWRDbGVhciIsInVuZGVmaW5lZCIsImFkZENsYXNzIiwidHJpZ2dlciIsInNldFRpbWVvdXQiLCJyZXNldCIsInJlc2V0Rm9ybSIsIm9uIiwiZXZlbnQiLCJ2YWxpZCIsImNoZWNrRm9ybSJdLCJtYXBwaW5ncyI6IkFBQUEsY0FVQSxXQXNCRSxRQUFTQSxHQUFpQkMsR0FDeEIsTUFBT0MsU0FBUUQsRUFBTUUsS0FBSyxlQVU1QixRQUFTQyxHQUFrQkgsRUFBT0ksR0FDaEMsR0FBSUMsR0FBT0ws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QUFrQkgsR0FBTyxJQUNsQixLQUlQRCxFQUFpQkMsS0FDbkJHLEVBQWtCSCxHQUFPLEdBQ3pCUyxFQUFFZ0QsTUFBTVksR0FBRyxvQkFBcUIsZ0JBQWlCLFNBQVVDLEdBQ3pELEdBQUlDLElBQVM1RCxFQUFVNkQsV0FDdkJyRSxHQUFrQkgsRUFBT3VFIiwiZmlsZSI6InBhcnRpYWxzL3ZhbGlkYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLy8gPT09PT09PT09PT09PT09PT1cbi8vIEF1dGhvcjog0KLQtdC80L3Ri9C5INC80LDQs1xuLy8gLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERhdGU6IDEzLjAxLjIwMjFcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4vLyDQktCw0LvQuNC00LDRhtC40Y9cbi8vID09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24gKCkge1xuICAvLyB2YXIgU0VUVElOR1MgPSB7XG4gIC8vICAgICBpZ25vcmU6ICcuaWdub3JlJyxcbiAgLy8gICAgIGdyb3Vwczoge1xuICAvLyAgICAgICAgIHVzZXJuYW1lOiAncGFzc3dvcmQgcmV0eXBlX3Bhc3N3b3JkJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHtcbiAgLy8gICAgICAgICBpZiAoQm9vbGVhbihlbGVtZW50LmF0dHIoJ29ubHktMTgnKSkpIHtcbiAgLy8gICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnRzKCdmb3JtJykuZmluZCgnLmpzLWVycm9yLWNvbnRhaW5lcicpKTtcbiAgLy8gICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYXR0cignbmFtZScpID09PSAncGFzc3dvcmQnIHx8IGVsZW1lbnQuYXR0cignbmFtZScpID09PSAncmV0eXBlX3Bhc3N3b3JkJykge1xuICAvLyAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcignW25hbWU9XCJyZXR5cGVfcGFzc3dvcmRcIl0nKTtcbiAgLy8gICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50KTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vIH07XG5cbiAgLyoqXG4gICAqINCd0YPQttC90L7Qu9C4INCx0LvQvtGH0LjRgtGMINC60L3QvtC/0LrRgyBzdWJtaXRcbiAgICogQHBhcmFtIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fSAkZm9ybSDQldC70LXQvNC10L3RgiDRhNC+0YDQvNGLXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlL2ZhbHNlXG4gICAqL1xuICBmdW5jdGlvbiBpc0J1dHRvbkRpc2FibGVkKCRmb3JtKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oJGZvcm0uZGF0YSgnYnV0dG9uLWRpcycpKTtcbiAgfVxuICAvKipcbiAgICog0KPRgdGC0LDQvdC+0LLQutCwINCx0LvQvtC60LjRgNC+0LLQutC4INC60L3QvtC/0LrQuFxuICAgKiBAcGFyYW0ge2pRdWVyeTxIVE1MRWxlbWVudD59ICRmb3JtINCV0LvQtdC80LXQvdGCINGE0L7RgNC80YtcbiAgICogQHBhcmFtIHtCb29sZWFufSBib29sZWFuINGA0LXRiNCw0Y7RiNC40Lkg0L/QsNGA0LDQvNC10YLRgCB0cnVlL2ZhbHNlIC0g0YPRgdGC0LDQvdC+0LLQuNGC0Ywv0YPQsdGA0LDRgtGMINCx0LvQvtC6XG4gICAqIEBzZWUgaXNCdXR0b25EaXNhYmxlZCDQuNGB0L/QvtC70YzQt9GD0LXRgiDQv9GA0L7QstC10YDQutGDXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc2V0QnV0dG9uRGlzYWJsZWQoJGZvcm0sIF9ib29sZWFuKSB7XG4gICAgdmFyICRzdWIgPSAkZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xuXG4gICAgaWYgKGlzQnV0dG9uRGlzYWJsZWQoJGZvcm0pKSB7XG4gICAgICAkc3ViLnByb3AoJ2Rpc2FibGVkJywgX2Jvb2xlYW4pO1xuICAgICAgJHN1Yi50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCBfYm9vbGVhbik7XG4gICAgfVxuICB9IC8vINCe0L/QuNGB0LDQvdC40LUg0L7RiNC40LHQvtC6XG5cblxuICAkLmV4dGVuZCgkLnZhbGlkYXRvci5tZXNzYWdlcywge1xuICAgIHJlcXVpcmVkOiAn0K3RgtC+INC/0L7Qu9C1INC90LXQvtCx0YXQvtC00LjQvNC+INC30LDQv9C+0LvQvdC40YLRjC4nLFxuICAgIG5hbWU6ICfQo9C60LDQttC40YLQtSDQuNC80Y8nLFxuICAgIHBob25lOiAn0KPQutCw0LbQuNGC0LUg0YLQtdC70LXRhNC+0L0nLFxuICAgIHJlbW90ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1LicsXG4gICAgZW1haWw6ICfQo9C60LDQttC40YLQtSDRjdC70LXQutGC0YDQvtC90L3Ri9C5INCw0LTRgNC10YEnLFxuICAgIHVybDogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBVUkwuJyxcbiAgICBkYXRlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Rg9GOINC00LDRgtGDLicsXG4gICAgZGF0ZUlTTzogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YPRjiDQtNCw0YLRgyDQsiDRhNC+0YDQvNCw0YLQtSBJU08uJyxcbiAgICBudW1iZXI6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YfQuNGB0LvQvi4nLFxuICAgIGRpZ2l0czogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0L7QtNC40YLQtSDRgtC+0LvRjNC60L4g0YbQuNGE0YDRiy4nLFxuICAgIGNyZWRpdGNhcmQ6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0L3QvtC80LXRgCDQutGA0LXQtNC40YLQvdC+0Lkg0LrQsNGA0YLRiy4nLFxuICAgIGVxdWFsVG86ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YLQsNC60L7QtSDQttC1INC30L3QsNGH0LXQvdC40LUg0LXRidGRINGA0LDQty4nLFxuICAgIGV4dGVuc2lvbjogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstGL0LHQtdGA0LjRgtC1INGE0LDQudC7INGBINC/0YDQsNCy0LjQu9GM0L3Ri9C8INGA0LDRgdGI0LjRgNC10L3QuNC10LwuJyxcbiAgICBtYXhsZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC90LUg0LHQvtC70YzRiNC1IHswfSDRgdC40LzQstC+0LvQvtCyLicpLFxuICAgIG1pbmxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KCfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3RjNGI0LUgezB9INGB0LjQvNCy0L7Qu9C+0LIuJyksXG4gICAgcmFuZ2VsZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUg0LTQu9C40L3QvtC5INC+0YIgezB9INC00L4gezF9INGB0LjQvNCy0L7Qu9C+0LIuJyksXG4gICAgcmFuZ2U6ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INGH0LjRgdC70L4g0L7RgiB7MH0g0LTQviB7MX0uJyksXG4gICAgbWF4OiAkLnZhbGlkYXRvci5mb3JtYXQoJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRh9C40YHQu9C+LCDQvNC10L3RjNGI0LXQtSDQuNC70Lgg0YDQsNCy0L3QvtC1IHswfS4nKSxcbiAgICBtaW46ICQudmFsaWRhdG9yLmZvcm1hdCgn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INGH0LjRgdC70L4sINCx0L7Qu9GM0YjQtdC1INC40LvQuCDRgNCw0LLQvdC+0LUgezB9LicpLFxuICAgIGFnZTogJ9CaINGB0L7QttCw0LvQtdC90LjRjiwg0JLRiyDQvdC1INC80L7QttC10YLQtSDQstC+0LnRgtC4LCDRgtCw0Log0LrQsNC6INC90LUg0LTQvtGB0YLQuNCz0LvQuCDQvNC40L3QuNC80LDQu9GM0L3QvtCz0L4g0LLQvtC30YDQsNGB0YLQsCDQtNC70Y8g0LvQtdCz0LDQu9GM0L3QvtC5INC/0L7QutGD0L/QutC4INC4INGD0L/QvtGC0YDQtdCx0LvQtdC90LjRjyDQsNC70LrQvtCz0L7Qu9GPJyxcbiAgICBkZWZhZ2U6ICfQndC10LLQtdGA0L3Ri9C5INGE0L7RgNC80LDRgiDQtNCw0L3QvdGL0YUnLFxuICAgIGNpdHk6ICfQo9C60LDQttC40YLQtSDQs9C+0YDQvtC0JyxcbiAgICB0ZXh0YXJlYTogJ9CS0LLQtdC00LjRgtC1INGB0L7QvtCx0YnQtdC90LjQtSdcbiAgfSk7XG4gIC8qINCf0YDQsNCy0LjQu9CwINCy0LDQu9C40LTQsNGG0LjQuCAqL1xuICAvLyDQmNC80Y9cblxuICAkLnZhbGlkYXRvci5hZGRNZXRob2QoJ3RleHQtbmFtZScsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKTtcbiAgfSwgJC52YWxpZGF0b3IubWVzc2FnZXMubmFtZSk7XG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZCgndGV4dC1jaXR5JywgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpO1xuICB9LCAkLnZhbGlkYXRvci5tZXNzYWdlcy5jaXR5KTtcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKCd0ZXh0YXJlYScsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlLmxlbmd0aCk7XG4gIH0sICQudmFsaWRhdG9yLm1lc3NhZ2VzLnRleHRhcmVhKTsgLy8g0KLQtdC70LXRhNC+0L1cblxuICAkLnZhbGlkYXRvci5hZGRNZXRob2QoJ3RlbCcsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIC8vIHZhciByZWdQaG9uZSA9IC9eKChcXCs3fDd8OCkrKFswLTldKXsxMH0pJC87XG4gICAgdmFyIHJlZ1Bob25lID0gL14oXFwrN3w3fDgpP1tcXHNcXC1dP1xcKD9bMC05XVswLTldezJ9XFwpP1tcXHNcXC1dP1swLTldezN9W1xcc1xcLV0/WzAtOV17Mn1bXFxzXFwtXT9bMC05XXsyfSQvO1xuICAgIHJldHVybiByZWdQaG9uZS50ZXN0KHZhbHVlKTtcbiAgfSwgJC52YWxpZGF0b3IubWVzc2FnZXMucGhvbmUpOyAvLyBlbWFpbFxuXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZCgnZW1haWwnLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICB2YXIgcmVnRW1haWwgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICByZXR1cm4gcmVnRW1haWwudGVzdCh2YWx1ZSk7XG4gIH0sICQudmFsaWRhdG9yLm1lc3NhZ2VzLmVtYWlsKTtcbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKCdkYXRlJywgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgdmFyIG1pbkRhdGUgPSBEYXRlLnBhcnNlKCcxOTAwLTAxLTAxJyk7XG4gICAgdmFyIG1heERhdGUgPSBEYXRlLnBhcnNlKCcyMTAwLTAxLTAxJyk7XG4gICAgdmFyIHZhbHVlRW50ZXJlZCA9IERhdGUucGFyc2UodmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlRW50ZXJlZCA8IG1pbkRhdGUgfHwgdmFsdWVFbnRlcmVkID4gbWF4RGF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhL0ludmFsaWR8TmFOLy50ZXN0KG5ldyBEYXRlKG1pbkRhdGUpKTtcbiAgfSwgJC52YWxpZGF0b3IubWVzc2FnZXMuYWdlKTsgLy8g0JLRi9C/0L7QtNCw0YjQutCwXG5cbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKCdqcy1zZWxlY3QtZm9ybScsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKTtcbiAgfSwgJ9Cd0LUg0LLRi9Cx0YDQsNC90L4uJyk7XG4gIC8qINCU0L7QsdC+0LLQu9C10L3QuNGPINC60LvQsNGB0YHQvtCyINC6INC/0YDQsNCy0LjQu9Cw0Lwg0LLQsNC70LjQtNC40YDQvtCy0LDQvdC40Y8gKi9cblxuICBqUXVlcnkudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoe1xuICAgICdqcy1uYW1lJzoge1xuICAgICAgJ3RleHQtbmFtZSc6IHRydWVcbiAgICB9LFxuICAgIC8vINCY0LzRj1xuICAgICdqcy10ZWwnOiB7XG4gICAgICB0ZWw6IHRydWVcbiAgICB9LFxuICAgIC8vINCi0LXQu9C10YTQvtC9XG4gICAgJ2pzLWVtYWlsJzoge1xuICAgICAgZW1haWw6IHRydWVcbiAgICB9IC8vIGVtYWlsXG5cbiAgfSk7XG4gICQoJy5qcy1mb3JtLXZhbGlkYXRlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmb3JtID0gJCh0aGlzKTtcbiAgICB2YXIgdmFsaWRhdG9yO1xuICAgIHZhbGlkYXRvciA9ICQodGhpcykudmFsaWRhdGUoe1xuICAgICAgaWdub3JlOiAnLmlnbm9yZSwgOmhpZGRlbicsXG4gICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGZvcm0pIHtcbiAgICAgICAgdmFyIGlzVmFsaWRDbGVhciA9ICRmb3JtLmRhdGEoJ3ZhbGlkLWNsZWFyJykgPT09IHVuZGVmaW5lZCB8fCAkZm9ybS5kYXRhKCd2YWxpZC1jbGVhcicpID09PSAndHJ1ZSc7XG4gICAgICAgIHZhciBpc0J1dHRvbkRpc2FibGVkID0gJGZvcm0uZGF0YSgnZGF0YS1idXR0b24tYmxvY2tlZCcpID09PSB1bmRlZmluZWQgfHwgJGZvcm0uZGF0YSgnZGF0YS1idXR0b24tYmxvY2tlZCcpID09PSAndHJ1ZSc7XG5cbiAgICAgICAgaWYgKGlzQnV0dG9uRGlzYWJsZWQpIHtcbiAgICAgICAgICAkZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICRmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoZm9ybSkudHJpZ2dlcignYWpheC5zZW5kJyk7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRDbGVhcikge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLmpzLWZpbGVuYW1lJykudHJpZ2dlcignZmlsZS5jbGVhcicpO1xuICAgICAgICAgICAgJCgnLmpzLXNlbGVjdC1mb3JtJykudHJpZ2dlcignc2VsZWN0Mi5jbGVhcicpO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRCdXR0b25EaXNhYmxlZCgkZm9ybSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0J1dHRvbkRpc2FibGVkKCRmb3JtKSkge1xuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQoJGZvcm0sIHRydWUpO1xuICAgICAgJCh0aGlzKS5vbignYmx1ciBrZXl1cCBjaGFuZ2UnLCAnaW5wdXQsIHNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdmFsaWQgPSAhdmFsaWRhdG9yLmNoZWNrRm9ybSgpO1xuICAgICAgICBzZXRCdXR0b25EaXNhYmxlZCgkZm9ybSwgdmFsaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pKCk7Il19
