public class App {
    public static void main(String[] args) throws Exception {
        // System.out.println("Hello, World!");
        int[] arr=new int[]{ 1,2,3,4,3,2,1 }; 
        int[] arr1=new int[]{ 6 }; 
        System.out.println(minOperations(arr1,arr));
    }

    public static int minOperations(int[] nums1, int[] nums2) {
        if(nums1.length>nums2.length*6 || nums2.length>nums1.length*6) return -1;
        int delta = 0;
        for(int i:nums1) delta-=i;
        for(int i:nums2) delta+=i;
        if(delta == 0) return 0;
        int[] m = new int[6];
        int pDelta = Math.abs(delta);
        for(int i:nums1) m[i-1]++;
        for(int i:nums2) m[6-i]++;
        int count = 0;
        int i = 0;
        while(pDelta>0){
            int val = delta>0?m[i]:m[5-i];
            int d = Math.min((pDelta+4-i)/(5-i), val);
            pDelta-=d*(5-i);
            count+=d;
            i++;
        }
        return count;
    }

}


