import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class HomePageComponent implements OnInit{
  
    companyLogos = [
        {   
            ruta: "../../../../../assets/company-logos/samsung-logo.svg",
            name: "samsung-logo" 
        },
        {   
            ruta: "../../../../../assets/company-logos/apple-logo.svg",
            name: "apple-logo" 
        },
        {   
            ruta: "../../../../../assets/company-logos/motorola-logo.svg",
            name: "motorola-logo" 
        },
        {   
            ruta: "../../../../../assets/company-logos/huawei-logo.svg",
            name: "huawei-logo" 
        },
        {   
            ruta: "../../../../../assets/company-logos/xiaomi-logo.svg",
            name: "xiaomi-logo" 
        },  
        {   
            ruta: "../../../../../assets/company-logos/nokia-logo.svg",
            name: "nokia-logo" 
        },
        {   
            ruta: "../../../../../assets/company-logos/lg-logo.svg",
            name: "lg-logo" 
        },
    ];

    FQAs: Array<any> = [
        {
            title: 'Formas de pago',
            info1: 'Aceptamos todos los medios de pago, incluyendo efectivo, tarjetas de débito y crédito, transferencias bancarias y también estamos a la vanguardia al aceptar criptomonedas.',
            info2: 'Queremos que disfrutes de una experiencia sin complicaciones al momento de realizar tu compra o pago por nuestros servicios.',
        },
        {
            title: 'Garantías',
            info1: 'Para los cambios de módulo, contamos con garantías específicas basadas en el modelo de tu celular. Esto significa que te proporcionamos una cobertura de garantía de 3 días para asegurar que estés satisfecho con el nuevo módulo instalado.',
            info2: 'En cuanto a nuestras reparaciones y productos, te ofrecemos una garantía extendida de 7 días. Esto nos permite brindarte la confianza de que nuestros servicios y productos cumplen con los más altos estándares de calidad.',
        },
        {
            title: '¿Cuánto tiempo lleva realizar una reparación?',
            info1: 'En el caso de los servicios técnicos y reparaciones, nuestro equipo trabaja diligentemente para resolver los problemas durante el día. Nos comprometemos a brindarte un servicio eficiente que te permita tener tu celular en perfecto estado en el menor tiempo posible.',
            info2: 'Cuando se trata de servicios de software, nos destacamos por nuestra rapidez, soluciamos cualquier problema en menos de 2 horas, para que puedas USAR nuevamente tu dispositivo sin demoras.',
        },
        {
            title: '¿Venden accesorios para celulares?',
            info1: 'Nos enorgullece ofrecerte una amplia gama de productos diseñados para complementar y proteger tu celular. Desde cables USB duraderos hasta cargadores de carga rápida.',
            info2: 'Además, protege la pantalla de tu celular con nuestros vidrios templados resistentes y ultra claros te brindarán una protección adicional contra golpes, rayones y roturas, sin comprometer la sensibilidad táctil de tu dispositivo.',
        },
    ]
    
    scrollToSection(): void {
        document.getElementById("servicios")?.scrollIntoView({behavior:'smooth'})
    }
    
    sendWhatsApp(){
        const input = document.getElementById('inputWhatsapp') as HTMLInputElement;
        const whatsappLink = document.getElementById('whatsappLink') as HTMLAnchorElement;
    
        const message = input.value;
        const numberPhone = +5493812116637;
        whatsappLink.href = `https://api.whatsapp.com/send?phone=${numberPhone}&text=${encodeURIComponent(message)}`
    }

    
    ngOnInit() {

        setTimeout(() => {

            const span: HTMLElement | null = document.querySelector('.animated-texts');
            const words: Array<string> = ['tablets','celulares'];
            let wordIndex: number = 0;
            
            const animatedTexts = setInterval(() => {
                let currentWord = words[wordIndex % words.length];
                span!.innerText = currentWord;
                wordIndex++;
            },3000)

        },1000)


        window.scrollTo(0,0);
    }
}