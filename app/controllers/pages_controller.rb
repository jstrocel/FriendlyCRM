class PagesController < ApplicationController
  def home
    
    
      
      if current_user
         @tasks  = current_user.tasks.find(:all, :conditions => ["deadline < ?", Time.now])
     @events = current_user.events.find(:all, :conditions => [ "review != ? and totime < ?", true, Time.now])
   end
      debugger
    
  end
  
  def eventreview
    
   @events = current_user.events.find(:all, :conditions => ["review != ? and totime < ?", true, Time.now])
   debugger
   
  end
  
  def taskreview
    @tasks  = Task.find(:all, :conditions => ["deadline < ?", Time.now])
    
  end
end
