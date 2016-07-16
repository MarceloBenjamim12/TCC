package socialFitness;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.socialFitness.entidades.Usuario;

public class TesteHibernate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("socialfitness");
		EntityManager em = emf.createEntityManager();
		
		Usuario usu = new Usuario();
		usu.setNome("João");
		usu.setLogin("j");
		usu.setSenha("123");
		
		em.getTransaction().begin();;
		
		em.persist(usu);
		em.getTransaction().commit();
	}

}
