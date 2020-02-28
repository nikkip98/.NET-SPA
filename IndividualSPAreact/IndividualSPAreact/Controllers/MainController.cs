using System;
using System.Collections.Generic;
using IndividualSPAreact.Business;
using IndividualSPAreact.Repository.Models;
using Microsoft.AspNetCore.Mvc;


namespace IndividualSPAreact.Controllers
{
    [Route("api/[controller]")]
    public class MainController : Controller
    {
        private readonly ItemFAQService _service;

        public MainController(ItemFAQService service)
        {
            _service = service;
        }

        [HttpGet("[action]")]
        public IEnumerable<ItemFAQ> Items()
        {
            return _service.GetAllItems();
        }

        [HttpGet("[action]")]
        public IEnumerable<ItemQuestion> Questions() // [FromBody]string type
        {
            return _service.GetAllQuestions();
        }

        [HttpPost("[action]/{iQuestion}/{iName}/{iMail}")]
        public void SubmitQuestion(string iQuestion, string iName, string iMail) // [FromBody]string type
        {
            var question = iQuestion;
            var name = iName;
            var mail = iMail;
            _service.SubmitQuestion(question, name, mail);
        }

        [HttpGet("[action]")]
        public IEnumerable<SubmittedQuestion> SubmittedQuestions() // [FromBody]string type
        {
            return _service.GetAllSubmittedQuestions();
        }

        [HttpPost("[action]/{iId}/{iUp}/{iDown}")]
        public void UpdateQuestion(int iId, int iUp, int iDown) // [FromBody]string type
        {

            var id = iId;
            var up = iUp;
            var down = iDown;

            _service.UpdateQuestion(id, up, down);
        }

    }
}