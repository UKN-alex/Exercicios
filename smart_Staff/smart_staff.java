package smart_Staff;

public class smart_staff {
	
	public static void main (String[] args) {
		
		for (int contador = -71; contador <= 103; contador++) {
			
			System.out.println(contador);
			
			if (contador %3 == 0) {
				
				System.out.print("Smart ");
			}

			if (contador %5 == 0) {
				System.out.println ("Staff " + "(" + contador + ")");
		}
		
		
	}

}
}