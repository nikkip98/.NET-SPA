using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IndividualSPAreact.Repository.Models
{
    public class ItemFAQ
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Type { get; set; }
        
        public string Text { get; set; }
        
        public string TypeName { get; set; }
    }
}