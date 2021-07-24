using System;

namespace ProgramacaoImplementacao
{
	public class Animal { 
		public void EmiteSom(){ }
	}
	public class Cachorro : Animal { 
		public void Latir() { }
	}
	public class Gato : Animal { 
		public void Miar() { }
	}
	class Program
	{
		static void Main(string[] args)
		{
            // Declarar a variavel cachorro como tipo Cachorro (uma implementação concreta de animal)
            // nos força a codificar para uma implementação concreta
			Cachorro cachorro = new Cachorro();
			cachorro.Latir();

			Gato gato = new Gato();
			gato.Miar();
		}
	}
}