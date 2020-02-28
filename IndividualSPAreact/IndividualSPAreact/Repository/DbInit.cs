using System.Linq;
using IndividualSPAreact.Repository.Models;
using Microsoft.Extensions.DependencyInjection;

namespace IndividualSPAreact.Repository
{
    public class DbInit
    {
        /**
         * Initial data is taken from https://www.vy.no/kundeservice/sporsmal-og-svar
         * to spare time and have good dummy data
         */
        public static void Initialize(IServiceScope serviceScope)
        {
            var dbContext = serviceScope.ServiceProvider.GetRequiredService<DatabaseContext>();
            dbContext.Database.EnsureCreated();

            if (dbContext.Items.Any()) return;
            
            var item1 = new ItemFAQ
            {
                Type = "Billetter og setereservasjon",
                Text = "Her finner du informasjon om blant annet hvordan du kjøper våre forskjellige billetter, hvordan du reserverer sete eller sovekupé og hvordan vi samarbeider med lokale operatører.",
                TypeName = "bs"
            };
            var item2 = new ItemFAQ
            {
                Type = "Endring, refusjon og kontrollgebyr",
                Text = "Her får du informasjon om hvordan du kan endre eller refundere billetten din, hvordan du søker om erstatning ved forsinkelse og hvordan du klager på kontrollgebyr.",
                TypeName = "erk"

            };
            var item3 = new ItemFAQ
            {
                Type = "Bagasje og spesielle behov",
                Text = "Her finner du ut blant annet hva du kan ha med deg om bord, hvor hittegodskontorene er og hvordan du bestiller assistanse på stasjonen. Du får også praktisk informasjon om å reise med barn.",
                TypeName = "bsh"
            };
            
            // bs Questions
            var question1 = new ItemQuestion
            {
                Question = "Hvordan kjøper jeg billett?",
                Answer = "Du kan kjøpe billett fra: Vy.no, Appen, Billettautomat, Betjent stasjon, Narvesen og Om bord i toget",
                TypeName = "bs",
                RatingUp = 0,
                RatingDown = 0,
            };
            var question2 = new ItemQuestion
            {
                Question = "Hvordan kjøper jeg periodebillett?",
                Answer = "Det enkleste for deg er å kjøpe periodebilletten i appen. Vi tilbyr også periodebillett for Ruter, Kolumbus og Skyss. Enkelte varianter selger vi kun i appen.",
                TypeName = "bs",
                RatingUp = 0,
                RatingDown = 0,
            };
            var question3 = new ItemQuestion
            {
                Question = "Hvordan henter jeg billetter kjøpt på vy.no? ",
                Answer = "Det enkleste er å hente ut billetten via appen. Den kan også lastes ned som PDF eller hentes ut om bord, på billettautomat, på betjent stasjon og hos enkelte Narvesen-kiosker.",
                TypeName = "bs",
                RatingUp = 0,
                RatingDown = 0,
            };
            // erk Questions
            var question4 = new ItemQuestion
            {
                Question = "Hvordan kan jeg endre eller refundere billetten? ",
                Answer = "Hvis du har enkeltbillett og vil endre eller refundere billetten din, så kan du gjøre det gratis frem til 24 timer før avgang. Ved mindre enn 24 timer før avgang må du betale et gebyr. Miniprisbilletter kan ikke endres eller refunderes.",
                TypeName = "erk",
                RatingUp = 0,
                RatingDown = 0,
            };
            var question5 = new ItemQuestion
            {
                Question = "Hvordan endrer jeg navn på billetten?",
                Answer = "Når du kjøper billetter så er det navnet til den som bestiller som står på billettene. Det er altså ikke noe i veien for at det står samme navn på flere billetter, så lenge personen som bestilte billettene skal være med på reisen.",
                TypeName = "erk",
                RatingUp = 0,
                RatingDown = 0,
            };
            var question6 = new ItemQuestion
            {
                Question = "Hvordan endrer jeg setereservasjonen min? ",
                Answer = "For å endre setevalg på en betalt enkeltbillett må du først avbestille billetten. Du kan da kjøpe ny billett med ønsket setevalg. Du kan også kontakte ombordpersonalet på reisen – dersom de har tilgjengelige seter som passer deg bedre kan du benytte deg av disse ledige setene.",
                TypeName = "erk",
                RatingUp = 0,
                RatingDown = 0,
            };
            // bsh Questions
            var question7 = new ItemQuestion
            {
                Question = "Hvor mye bagasje kan jeg ha med? ",
                Answer = "Du kan ta med deg inntil 30 kilo fordelt på maksimum 3 kolli. Har du mer enn dette og skal reise mellom Oslo og Voss/Bergen eller Trondheim, kan du benytte bagasjetransport. ",
                TypeName = "bsh",
                RatingUp = 0,
                RatingDown = 0,
            };
            var question8 = new ItemQuestion
            {
                Question = "Kan jeg ha med kjæledyr?",
                Answer = "Dyrene som får bli med på tog er hund, katt, gnagere i bur, burfugl og små skilpadder. Du kan ta med akvariefisk så lenge de er forsvarlig pakket. Andre dyr er ikke ønsket på toget. Eksempler på dyr som ikke er ønsket er insekter, edderkopper, krypdyr/reptiler og amfibier.",
                TypeName = "bsh",
                RatingUp = 0,
                RatingDown = 0,
            };
            var question9 = new ItemQuestion
            {
                Question = "Kan jeg ha med ski eller snøbrett?",
                Answer = "Ja. Ski og snøbrett skal plasseres på anviste steder, og du er selv ansvarlig for utstyret under reisen. Ski må være pakket forsvarlig.",
                TypeName = "bsh",
                RatingUp = 0,
                RatingDown = 0,
            };
            

            dbContext.Add(item1);
            dbContext.Add(item2);
            dbContext.Add(item3);
            dbContext.Add(question1);
            dbContext.Add(question2);
            dbContext.Add(question3);
            dbContext.Add(question4);
            dbContext.Add(question5);
            dbContext.Add(question6);
            dbContext.Add(question7);
            dbContext.Add(question8);
            dbContext.Add(question9);

            dbContext.SaveChanges();

        }
    }
}