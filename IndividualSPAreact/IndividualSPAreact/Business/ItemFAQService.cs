using System.Collections.Generic;
using System.Linq;
using IndividualSPAreact.Repository;
using IndividualSPAreact.Repository.Models;

namespace IndividualSPAreact.Business
{
    public class ItemFAQService
    {
        private readonly DatabaseContext _databaseContext;

        public ItemFAQService(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public IEnumerable<ItemFAQ> GetAllItems()
        {
            return _databaseContext.Items.Select(i => new ItemFAQ()
            {
                Id = i.Id,
                Type = i.Type,
                Text = i.Text,
                TypeName = i.TypeName
            }).ToList();
        }
        
        public IEnumerable<ItemQuestion> GetAllQuestions()
        {
            return _databaseContext.Questions.Select(i => new ItemQuestion()
            {
                Id = i.Id,
                Question = i.Question,
                Answer = i.Answer,
                TypeName = i.TypeName, 
                RatingUp = i.RatingUp,
                RatingDown = i.RatingDown
            }).ToList();
        }

        public void SubmitQuestion(string question, string name, string mail)
        {
            var input = new SubmittedQuestion
            {
                Text = question,
                Name = name,
                Mail = mail

            };

            _databaseContext.SubmittedQuestions.Add(input);
            _databaseContext.SaveChanges();
        }
        
        public IEnumerable<SubmittedQuestion> GetAllSubmittedQuestions()
        {
            return _databaseContext.SubmittedQuestions.Select(i => new SubmittedQuestion()
            {
                Id = i.Id,
                Text = i.Text,
                Name = i.Name,
                Mail = i.Mail
            }).ToList();
        }

        public void UpdateQuestion(int id, int up, int down)
        {
            var qToUpdate = GetQuestionById(id);
            qToUpdate.RatingUp = up;
            qToUpdate.RatingDown = down;

            _databaseContext.Questions.Update(qToUpdate);
            _databaseContext.SaveChanges();
        }

        private ItemQuestion GetQuestionById(int id)
        {
            return _databaseContext.Questions.FirstOrDefault(q => q.Id == id);
        }


    }
}