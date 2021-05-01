package invesao_array;

public class Inversao_array {
	
		public static void main(String[] args) {
		
		String[] array = new String[] { "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"};   

		String revers;

		for ( int i=array.length - 1 ; i >= 0 ; i-- ) {

		revers = array[i] +"\n";
		System.out.print(revers);

		}		
		
	}
}
