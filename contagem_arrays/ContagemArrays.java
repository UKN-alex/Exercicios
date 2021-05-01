package contagem_arrays;

public class ContagemArrays {
	public static void main(String[] args) {
		
		String[] array1 = new String[] {"ab", "bc", "abc", "cba", "ab","ab", "cba"};
		String[] array2 = new String[] {"ab", "cba", "bb"};
		int[] total = new int [3];
		int totalCont = 0;
		for (int i = 0; i<array2.length; i++) {
		
			for (String verificado:array1) {
				if (verificado == array2[i]){
					totalCont ++;
					
				}
			}
			total[i] = totalCont;
			totalCont = 0;	
		}
		System.out.printf("[%d, %d, %d]", total[0], total[1], total[2]);
	}
	
}
