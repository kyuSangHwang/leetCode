class Solution {
    public boolean isPalindrome(int x) {
        
        // 1. x를 문자열로 변환해서 String 변수(stringX)에 초기화한다. (String.valueOf)
        String stringX = String.valueOf(x);
        
        // 2. stringX의 길이를 int 변수(lengthX)에 초기화한다.
        int lengthX = stringX.length();
        
        // 3. stringX의 길이를 2로 나눈 값을 int 변수(halfLength)에 초기화한다.
        int halfLengthX = lengthX/2;
        
        // 4. int 변수(i)를 0으로 초기화한다.
        int i = 0;
        
        // 5. i가 halfLength보다 작을때 반복
        while (i < halfLengthX) {
            // 5-1. 만약 stringX(i)가 stringX(lengthX-1-i)이 같지 않으면 return false;
            if (stringX.charAt(i) != stringX.charAt(lengthX-1-i)) return false;
            // 5-2. i를 1씩 증가
            i++;
        }
        
        // 6. return true;
        return true;
        
    }
}










