package com.bbmc.web;

 
import com.bbmc.ArgsException;
import com.bbmc.ResultMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ControllerBase {
	private final static Logger logger = LoggerFactory.getLogger(ControllerBase.class);

	
	@ExceptionHandler (ArgsException.class)
//	@ResponseStatus (HttpStatus.INTERNAL_SERVER_ERROR)
	@ResponseBody
	public ResultMap handleArgsException(ArgsException ex) {
		logger.error(ex + "::argsName=" + ex.argsName());		
		ResultMap map = ResultMap.create(ex);
		return map;
	}
	
	@ExceptionHandler (Exception.class)
//	@ResponseStatus (HttpStatus.INTERNAL_SERVER_ERROR)
	@ResponseBody
	public ResultMap handleAllExceptions(Exception ex) {
		logger.error("error", ex);
		ResultMap map = ResultMap.create(ex);
		return map;
	}
	
	
}
