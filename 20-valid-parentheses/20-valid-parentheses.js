/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const check = [];
    
    for (i = 0; i < s.length; i++) {
        let stringChartAt = s.charAt(i);
        
        switch (stringChartAt) {
            case '(': check.push(')'); break;
            case '{': check.push('}'); break;
            case '[': check.push(']'); break;
            default: if (stringChartAt !== check.pop()) return false;
        }
    }
    
    return check.length === 0;

};

// 1. 빈 배열 check를 생성
// 2. 문자열 s의 길이만큼 i가 0부터 1씩증가하며 반복
//     2-1. 변수 stringChatAt에 s 문자열을 i번째 문자를 초기화한다.
//     2-2. swich-case 문으로 stringChatAt가
//         2-2-1. ( 이면 빈 배열 check에 ) 를 넣는다.
//         2-2-2. { 이면 빈 배열 check에 } 를 넣는다.
//         2-2-3. [ 이면 빈 배열 check에 ] 를 넣는다.
//         2-2-4. default로 stringChatAt가 check의 마지막 값과 같지 않으면
//             2-2-4-1. return false;
// 3. return check.length === 0;