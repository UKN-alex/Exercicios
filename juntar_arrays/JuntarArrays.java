package juntar_arrays;

import java.util.ArrayList;
import java.util.List;

public class JuntarArrays {
	public static void main(String[] args) {

		List<Object> testList = new ArrayList<Object>();
		
		for (Object dado:DadosArrays.array1) {
			testList.add(dado);
			
		}
		for (Object dado:DadosArrays.array2) {
			testList.add(dado);
		}
		
		for (Object dado:DadosArrays.array3) {
			testList.add(dado);
		}
		System.out.println(testList);
		
	}
	
}
