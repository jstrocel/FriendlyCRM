class PagesController < ApplicationController
  def home
    
     @tasks  = Task.find(:all, :conditions => ["deadline < ?", Time.now])
      
      if current_user
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
