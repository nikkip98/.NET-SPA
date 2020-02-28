using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IndividualSPAreact.Repository.Models
{
    public class SubmittedQuestion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        public string Text { get; set; }
        public string Name { get; set; }
        public string Mail { get; set; }
        
        
    }
}