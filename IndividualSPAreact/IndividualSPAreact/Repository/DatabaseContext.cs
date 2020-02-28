using IndividualSPAreact.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace IndividualSPAreact.Repository
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        public DbSet<ItemFAQ> Items { get; set; }
        public DbSet<ItemQuestion> Questions { get; set; }
        
        public DbSet<SubmittedQuestion> SubmittedQuestions { get; set; }
        
        
        
    }
}