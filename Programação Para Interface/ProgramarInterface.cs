using System;

namespace ProgramacaoInterface
{
	public class Animal { 
		public void EmiteSom(){ }
	}
	public class Cachorro : Animal { 
		public void Latir() { 
            EmiteSom();
        }
	}
	public class Gato : Animal { 
		public void Miar() {
            EmiteSom();
         }
	}
	class Program
	{
		static void Main(string[] args)
		{
            // Sabemos que é um cachorro, mas agora podemos usar a referência animal de varias formas
			Animal cachorro = new Cachorro();
			cachorro.EmiteSom();

			Animal gato = new Gato();
			gato.EmiteSom();
		}
	}
}