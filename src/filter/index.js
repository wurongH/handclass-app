const filter = {
    //时间格式化 <p>{{'/Date(1493027950023)/' | datetimeFormat('yyyy/MM/dd hh:mm:ss')}}</p>
    getDate: function(date) {
        if (typeof date === "string") {
            var mts = date.match(/(\/Date\((\d+)\)\/)/);
            if (mts && mts.length >= 3) {
                date = parseInt(mts[2]);
            }
        }
        date = new Date(date);
        return date;
    },
    datetimeFormat: function(date, format) {

        date = filter.getDate(date);

        if (!date || date.toUTCString() == "Invalid Date") {
            return "";
        }
        var map = {
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "m": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "q": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };

        format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
            var v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            } else if (t === 'y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;

    },
    // :src=" value |  imgFormat(100,100,false)"
    // :style="item.ImgUrl  | imgFormat(86,86,true)"
    imgFormat: function(imgurl, w, h, isBg) {
       if(!imgurl){
           return "";
         }
        imgurl = imgurl.split("!/fw/")[0];
        var re = /^https:\/\/img.diankeduo.cn/;
        var returnVulue = imgurl;
        if (re.test(imgurl)) {

            returnVulue = imgurl + '!/fw/' + w + '/fh/' + h + '/format/jpg';
        }
        if (isBg) {
            return 'background-image:url(' + returnVulue + ')';
        }
        return returnVulue
    },
    countDate: function(beginTime, endTime, type, num) {

        var begin = filter.getDate(beginTime);
        var end = filter.getDate(endTime);
        var getTime = end - begin;
        var returnValue = "";
        switch (type) {
            case 'getDay':
                returnValue = parseInt(getTime / 1000 / 60 / 60 / 24, 10);
                if (returnValue == 0) {
                    returnValue = "当天结束"
                } else {
                    returnValue = returnValue + "天后结束"
                }
                break;
            case 'checkDay':
                var nowNum = parseInt(getTime / 1000 / 60 / 60 / 24, 10);
                returnValue = num > nowNum;
                break;
        }
        return returnValue;
    },

    //保留两位小数
    toDecimal2(x) {
      var f = parseFloat(x);
      if (isNaN(f)) {
        return false;
      }
      var f = Math.round(x*10*10)/100;
      var s = f.toString();
      var rs = s.indexOf('.');
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + 2) {
        s += '0';
      }
      return s;

    },
    //保留一位小数
    toDecimal1(x) {
      var f = parseFloat(x);
      if (isNaN(f)) {
        return false;
      }
      var f = Math.round(x*10*10)/100;
      var s = f.toString();
      var rs = s.indexOf('.');
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + 1) {
        s += '0';
      }
      return s;
    },
};

export default filter;
